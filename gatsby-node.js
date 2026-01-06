/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // Ensure redirect is registered (was previously in a separate createPages export and got overwritten)
  createRedirect({
    fromPath: `/bc`, // the path you'll put in your QR code
    toPath: `/?mtm_campaign=bc`, // where visitors will land
    isPermanent: true,
    redirectInBrowser: true,
  })

  const publications = graphql(`
    query PubPage {
      allPublicationsJson(sort: { date: DESC }) {
        edges {
          node {
            slug
          }
          next {
            slug
          }
          previous {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allPublicationsJson.edges.forEach(
      ({ node, next, previous }) => {
        createPage({
          path: "/publications/" + node.slug,
          component: path.resolve("./src/templates/publication-detail.js"),
          context: {
            slug: node.slug,
            next: next,
            previous: previous,
          },
        })
      }
    )
  })

  const blogs = graphql(`
    query QueryBlogs {
      allFile(
        filter: { sourceInstanceName: { eq: "blog" } }
        sort: { childrenMarkdownRemark: { frontmatter: { date: DESC } } }
      ) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
          next {
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
          previous {
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allFile.edges.forEach(({ node, next, previous }) => {
      const slug = node.childMarkdownRemark.fields.slug
      const insightsPath = "/insights" + slug
      const blogPath = "/blog" + slug
      createPage({
        path: insightsPath,
        component: path.resolve("./src/templates/blog-detail.js"),
        context: { slug, next, previous },
      })
      // Redirect old blog URLs to insights
      createRedirect({
        fromPath: blogPath,
        toPath: insightsPath,
        isPermanent: true,
        redirectInBrowser: true,
      })
    })
  })

  const works = graphql(`
    query QueryWorks {
      allFile(
        filter: { sourceInstanceName: { eq: "projects" } }
        sort: { childrenMarkdownRemark: { frontmatter: { date: DESC } } }
      ) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
          next {
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
          previous {
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allFile.edges.forEach(({ node, next, previous }) => {
      createPage({
        path: "/projects" + node.childMarkdownRemark.fields.slug,
        component: path.resolve("./src/templates/project-detail.js"),
        context: {
          slug: node.childMarkdownRemark.fields.slug,
          next: next,
          previous: previous,
        },
      })
    })
  })

  // Redirect blog listing to insights listing
  createRedirect({
    fromPath: `/blog`,
    toPath: `/insights`,
    isPermanent: true,
    redirectInBrowser: true,
  })

  const tags = graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter { tags }
            }
          }
        }
      }
    }
  `).then(result => {
    const tags = result.data.allFile.edges
      .map(edge => edge.node.childMarkdownRemark.frontmatter.tags || [])
      .reduce((acc, curr) => acc.concat(curr), [])
      .filter((tag, index, self) => self.indexOf(tag) === index)

    tags.forEach(tag => {
      createPage({
        path: `/projects/tags/${tag}/`,
        component: path.resolve("./src/templates/project-tag-template.js"),
        context: { tag },
      })
    })
  })

  // Create unified skill pages aggregating projects, insights, and publications
  const skills = graphql(`
    {
      proj: allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        edges { node { childMarkdownRemark { frontmatter { skills tags } } } }
      }
      blog: allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
        edges { node { childMarkdownRemark { frontmatter { skills tags } } } }
      }
      pubs: allPublicationsJson { edges { node { skills } } }
    }
  `).then(result => {
    const pSkills = result.data.proj.edges
      .map(e => {
        const fm = e.node.childMarkdownRemark.frontmatter || {}
        return [...(fm.skills || []), ...(fm.tags || [])]
      })
      .flat()
    const bSkills = result.data.blog.edges
      .map(e => {
        const fm = e.node.childMarkdownRemark?.frontmatter || {}
        return [...(fm.skills || []), ...(fm.tags || [])]
      })
      .flat()
    const pubSkills = result.data.pubs.edges
      .map(e => e.node.skills || [])
      .flat()
    const allSkills = Array.from(new Set([...pSkills, ...bSkills, ...pubSkills])).filter(Boolean)

    allSkills.forEach(skill => {
      createPage({
        path: `/skills/${encodeURIComponent(skill)}`,
        component: path.resolve("./src/templates/skill-template.js"),
        context: { skill },
      })
    })
  })

  const misc = graphql(`
    query PubPage {
      allMiscpubsJson(sort: { date: DESC }) {
        edges {
          node {
            slug
          }
          next {
            slug
          }
          previous {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allMiscpubsJson.edges.forEach(({ node, next, previous }) => {
      createPage({
        path: "/publications/" + node.slug,
        component: path.resolve("./src/templates/misc-detail.js"),
        context: {
          slug: node.slug,
          next: next,
          previous: previous,
        },
      })
    })
  })

  // Await all page creations, including misc pages
  return Promise.all([publications, blogs, tags, misc, works, skills])
}

// link PersonsJson.slug to PublicationsJson.authors
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
      type PublicationsJson implements Node @infer { 
        authors: [PersonsJson] @link(by: "slug", from: "authors")
        skills: [String]
      }
      
      type MiscpubsJson implements Node @infer { 
        authors: [PersonsJson] @link(by: "slug", from: "authors")
        attach: File @fileByRelativePath
        skills: [String]
      }

      type Publication implements Node {
        title: String!
        date: Date! @dateformat
        slug: String!
        location: String
        url: String
        img: String
        attach: PublicationAttach
        alternate_link: String
        tags: [String!]!
        venue: String
        authors: [String!]!
        coFirstAuthors: Boolean!          
        abstract: String
      }
  
      type PublicationAttach {
        get: String
        video: String
      }
    `)

  // Explicitly declare Markdown frontmatter fields used by 'projects'
  createTypes(`
    type MarkdownRemarkFrontmatter {
      title: String
      subtitle: String
      date: Date @dateformat
      tags: [String]
      skills: [String]
      img: File @fileByRelativePath
    }
  `)
}

// Map publication tags to a standardized skill vocabulary
exports.createResolvers = ({ createResolvers }) => {
  const mapTagToSkill = tag => {
    if (!tag) return null
    const t = String(tag).toLowerCase().trim()
    const dictionary = {
      // Robotics & Platforms
      ros: "ROS",
      ros2: "ROS",
      turtlebot: "ROS",
      icra: "Robotics",
      humanoid: "Robotics",
      "non-humanoid": "Robotics",
      // HRI & Interaction
      hri: "HRI",
      roman: "HRI",
      icsr: "HRI",
      proxemic: "HRI",
      "social-cues": "HRI",
      "non-verbal cues": "HRI",
      "robot game": "HRI",
      "social robot": "HRI",
      "interaction-centric": "HRI",
      metrics: "Metrics",
      handshake: "HRI",
      // Perception & CV
      "computer vision": "Computer Vision",
      // Data & Tools
      rosbags: "ROS",
      "tools for hri": "HRI",
      "dataset tools": "Data Engineering",
      // Affective
      emotions: "Affective Computing",
    }
    return dictionary[t] || tag
  }

  createResolvers({
    PublicationsJson: {
      skills: {
        type: "[String]",
        resolve: source => {
          const tags = source.tags || []
          const mapped = tags.map(mapTagToSkill).filter(Boolean)
          return Array.from(new Set(mapped))
        },
      },
    },
    MiscpubsJson: {
      skills: {
        type: "[String]",
        resolve: source => {
          const tags = source.tags || []
          const mapped = tags.map(mapTagToSkill).filter(Boolean)
          return Array.from(new Set(mapped))
        },
      },
    },
  })
}
