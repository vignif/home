import React from "react"
import { graphql, Link } from "gatsby"
import _ from "lodash"

import Layout from "../components/layout"

const TagsPage = ({ data }) => {
  const tagCounts = _.countBy(
    data.allPublicationsJson.edges.map(edge => edge.node.tags).flat()
  )
  const tags = Object.keys(tagCounts).sort()


  return (
    <Layout>

      <section className="py-5 text-center container own_container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">All Tags</h1>
            <p className="lead text-muted"></p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <hr className="hr-text" data-content="" />
          </div>
        </div>

        <div className="row pb-5">
          <div className="col">

            {tags.map(tag => (
              <div key={tag} className="authors_list fw-light">
                <Link className="btn btn-warning m-2" to={`/tags/${tag}`}>
                  {tag} ({tagCounts[tag]})
                </Link>
              </div>
            ))}
          </div>
        </div>


        <center>
          <Link to="/">Go back to the homepage</Link>
        </center>

      </section>
    </Layout>
  )


}

export default TagsPage

export const query = graphql`
  {
    allPublicationsJson {
      edges {
        node {
          tags
        }
      }
    }
  }
`
