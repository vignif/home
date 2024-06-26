module.exports = {
  // pathPrefix: "/",
  siteMetadata: {
    title: `Francesco Vigni`,
    description: `Francesco Vigni's personal website`,
    author: `@francescovigni`,
    keywords: `researcher, robotics, artificial intelligence, human-robot interaction, HRI`,
    image: `data/images/me_square.jpg`,
    siteUrl: `https://francescovigni.com`,
    twitterUsername: `@superdado_5`,
    social: {
      twitter: `https://twitter.com/superdado_5`,
      github: `https://github.com/vignif`,
      linkedin: `https://www.linkedin.com/in/francesco-vigni/`,
      google: `https://scholar.google.com/citations?user=ksO3xN0AAAAJ&hl=en`
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-QHV4ZCMNJ9"
        ],
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Francesco Vigni`,
        short_name: `Francesco Vigni`,
        start_url: `/`,
        background_color: `#334699`,
        theme_color: `#334699`,
        display: `standalone`,
        icon: `src/images/space-suit.png`, // This path is relative to the root of the site.
      }
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
