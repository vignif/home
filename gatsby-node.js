/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

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
    const { data } = await graphql(`
        query PubPage {
            allPublicationsJson(sort: {date: DESC}) {
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
    `)
    data.allPublicationsJson.edges.forEach(edge => {
        actions.createPage({
            path: '/publications/' + edge.node.slug,
            component: path.resolve('./src/templates/publication-detail.js'),
            context: {
                slug: edge.node.slug,
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
