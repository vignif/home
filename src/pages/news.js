import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import { HiDocumentText, HiOutlineSearch } from 'react-icons/hi';

const News = ({ data }) => {
  const news = data.allFile.nodes
  console.log(news)


  return (
    <Layout>

      <section className="py-5 text-center container own_container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">News</h1>
            <p className="lead text-muted"></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="" />
          </div>
        </div>
        <div className="container own_sub_container">

          {news.map((node) => (
            <div key={node.id} className="row p-2">
              <>
                <div className="col-sm-2 own_sub_container">
                  <p className="own_date">{node.childMarkdownRemark.frontmatter.date}</p>
                </div>

                <div className="col-md-10">
                  <div className="justify" dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }} />
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

      </section>
    </Layout>
  )
}

export default News

export const Head = () => (
  <Seo title="News" />
)


//query data from the graphql server
export const query = graphql`
query NewsCV {
  allFile(
    filter: {sourceInstanceName: {eq: "news"}}
    sort: {childrenMarkdownRemark: {frontmatter: {date: DESC}}}
  )
  {
    nodes {
      id
      childMarkdownRemark {
        frontmatter {
          date(formatString: "DD MMM, YYYY")
        }
        html
      }
    }
  },
}
`
