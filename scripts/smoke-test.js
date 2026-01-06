/*
  Simple post-build smoke tests:
  - Ensure key routes have page-data.json
  - Ensure there is at least 1 project and 1 insight detail page
*/
const fs = require('fs')
const path = require('path')

const PD = path.join(process.cwd(), 'public', 'page-data')
const requiredRoutes = ['index', 'projects', 'insights', 'publications', 'about']

function existsRoute(route) {
  // route folder holds page-data.json or index/page-data.json depending on Gatsby version
  const direct = path.join(PD, route, 'page-data.json')
  const index = path.join(PD, route, 'index', 'page-data.json')
  return fs.existsSync(direct) || fs.existsSync(index)
}

function countSubPages(dir) {
  const full = path.join(PD, dir)
  if (!fs.existsSync(full)) return 0
  const entries = fs.readdirSync(full, { withFileTypes: true })
  return entries.filter(e => e.isDirectory()).length
}

function fail(msg) {
  console.error(`SMOKE TEST FAILED: ${msg}`)
  process.exit(1)
}

function ok(msg) {
  console.log(`SMOKE TEST: ${msg}`)
}

// 1) Required routes
for (const route of requiredRoutes) {
  if (!existsRoute(route)) fail(`Missing page-data for route: /${route}`)
}
ok('Core routes present')

// 2) At least one project detail
const projectCount = countSubPages('projects')
if (projectCount < 1) fail('No project detail pages found under /projects')
ok(`Found ${projectCount} project pages`)

// 3) At least one insight detail
const insightsCount = countSubPages('insights')
if (insightsCount < 1) fail('No insight detail pages found under /insights')
ok(`Found ${insightsCount} insights pages`)

// 4) 404 exists
const notFound = path.join(process.cwd(), 'public', '404.html')
if (!fs.existsSync(notFound)) fail('Missing 404.html')
ok('404 page present')

console.log('SMOKE TESTS PASSED')
