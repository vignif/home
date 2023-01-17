import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
            title
            description
            author
            social{
              twitter
              github
              linkedin
            }
          }
      }
    }
  `)

    return data.site.siteMetadata
}