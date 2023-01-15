/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const { nextTick } = require('process')

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query PubPage {
            allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                edges {
                node {
                    frontmatter {
                    slug
                    }
                }
                next {
                    frontmatter {
                    slug
                    }
                }
                previous {
                    frontmatter {
                    slug
                    }
                }
                }
            }
        }
    `)
    data.allMarkdownRemark.edges.forEach(edge => {
        actions.createPage({
            path: '/publications/' + edge.node.frontmatter.slug,
            component: path.resolve('./src/templates/publication-detail.js'),
            context: {
                slug: edge.node.frontmatter.slug,
                next: edge.next,
                previous: edge.previous
            },
        })
    })

}
// link PersonsJson.slug to PublicationsJson.authors
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    createTypes(`
      type PublicationsJson implements Node @infer { 
        authors: [PersonsJson] @link(by: "slug", from: "authors")
      }
    `);
  };