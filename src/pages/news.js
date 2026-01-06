import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import SocialLinks from "../components/socials"

const News = ({ data }) => {
  const news = data.allFile.nodes
  console.log(news)

  return (
    <Layout>
      <section className="text-center pt-5">
        <h1 className="fw-semibold">News</h1>
        <hr className="custom-hr" />
      </section>
      <div className="row">
        <div className="col-md-12">
          <hr className="hr-text" data-content="" />
        </div>
      </div>
      <div className="container own_sub_container">
        {news.map(node => (
          <div key={node.id} className="row p-2">
            <>
              <div className="col-sm-2 own_sub_container">
                <p className="own_date">
                  {node.childMarkdownRemark.frontmatter.date}
                </p>
              </div>

              <div className="col-md-10">
                <div
                  className="justify"
                  dangerouslySetInnerHTML={{
                    __html: node.childMarkdownRemark.html,
                  }}
                />
              </div>
            </>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-md-12">
          <hr className="hr-text" data-content="" />
        </div>
      </div>
      <center>
        <Link to="/">Go back to the homepage</Link>
      </center>
    </Layout>
  )
}

export default News

export const Head = () => <Seo title="News" />

//query data from the graphql server
export const query = graphql`
  query NewsCV {
    allFile(
      filter: { sourceInstanceName: { eq: "news" } }
      sort: { childrenMarkdownRemark: { frontmatter: { date: DESC } } }
    ) {
      nodes {
        id
        childMarkdownRemark {
          frontmatter {
            date(formatString: "DD MMM, YYYY")
          }
          html
        }
      }
    }
  }
`
