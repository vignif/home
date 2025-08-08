import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          image
          siteUrl
          twitterUsername
          social {
            twitter
            github
            linkedin
            google
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}
