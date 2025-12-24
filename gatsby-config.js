module.exports = {
  // pathPrefix: "/",
  siteMetadata: {
    title: `Francesco Vigni`,
    description: `Francesco Vigni's personal website`,
    author: `@francescovigni`,
    keywords: `researcher, robotics, artificial intelligence, human-robot interaction, HRI`,
    image: `data/images/me_square.jpg`,
    siteUrl: `https://francescovigni.com`,
    twitterUsername: `@fra_cescovigni`,
    social: {
      twitter: `https://x.com/fra_cescovigni`,
      github: `https://github.com/vignif`,
      linkedin: `https://linkedin.com/in/francesco-vigni/`,
      google: `https://scholar.google.com/citations?user=ksO3xN0AAAAJ&hl=en`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-QHV4ZCMNJ9"],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    `gatsby-remark-responsive-iframe`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: ['/dev-404-page', '/404', '/404.html'],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://francescovigni.com',
        sitemap: 'https://francescovigni.com/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allFile } }) => {
              return allFile.edges.map(edge => {
                const frontmatter = edge.node.childMarkdownRemark.frontmatter
                return Object.assign({}, frontmatter, {
                  description: edge.node.childMarkdownRemark.excerpt,
                  date: frontmatter.date,
                  url: site.siteMetadata.siteUrl + '/blog' + edge.node.childMarkdownRemark.fields.slug,
                  guid: site.siteMetadata.siteUrl + '/blog' + edge.node.childMarkdownRemark.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.childMarkdownRemark.html }],
                })
              })
            },
            query: `
              {
                allFile(
                  filter: {
                    sourceInstanceName: { eq: "blog" }
                    extension: { eq: "md" }
                  }
                  sort: { childMarkdownRemark: { frontmatter: { date: DESC } } }
                ) {
                  edges {
                    node {
                      childMarkdownRemark {
                        excerpt
                        html
                        fields { slug }
                        frontmatter {
                          title
                          date
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Francesco Vigni - Blog RSS Feed',
            match: '^/blog/',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Francesco Vigni`,
        short_name: `Francesco Vigni`,
        start_url: `/`,
        background_color: `#334699`,
        theme_color: `#334699`,
        display: `standalone`,
        icon: `src/images/space-suit.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/data/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/data/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/data/news/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `publications`,
        path: `${__dirname}/data/publications.json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `persons`,
        path: `${__dirname}/data/persons.json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cv`,
        path: `${__dirname}/data/cv.json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `miscpubs`,
        path: `${__dirname}/data/miscpubs.json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `research`,
        path: `${__dirname}/data/research/`,
      },
    },
  ],
}
