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

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    const publications = graphql(`
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
      `).then(result => {
        result.data.allPublicationsJson.edges.forEach(({ node, next, previous }) => {
            createPage({
                path: '/publications/' + node.slug,
                component: path.resolve('./src/templates/publication-detail.js'),
                context: {
                    slug: node.slug,
                    next: next,
                    previous: previous
                },
            });
        });
    })

    const blogs = graphql(`
        query QueryBlogs {
            allFile(
                filter: {sourceInstanceName: {eq: "blog"}}
                sort: {childrenMarkdownRemark: {frontmatter: {date: DESC}}}) 
            {
            edges {
            node {
                childMarkdownRemark {
                fields { slug }
                }}
            next {
                childMarkdownRemark {
                fields { slug }
                }}
            previous{
                childMarkdownRemark {
                fields { slug }
                }}
            }}
        }
      `).then(result => {
        result.data.allFile.edges.forEach(({ node, next, previous }) => {
            createPage({
                path: '/blog' + node.childMarkdownRemark.fields.slug,
                component: path.resolve('./src/templates/blog-detail.js'),
                context: {
                    slug: node.childMarkdownRemark.fields.slug,
                    next: next,
                    previous: previous
                },
            });
        });
    })

    return Promise.all([publications, blogs])
};

// link PersonsJson.slug to PublicationsJson.authors
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    createTypes(`
      type PublicationsJson implements Node @infer { 
        authors: [PersonsJson] @link(by: "slug", from: "authors")
      }
    `);
};
