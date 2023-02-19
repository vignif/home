import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

const TagTemplate = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allPublicationsJson

  return (
    <div>
      <h1>{tag}</h1>
      <h3>{totalCount} publication{totalCount === 1 ? "" : "s"} tagged with "{tag}"</h3>
      <ul>
        {edges.map(({ node }) => {
          const { title, date } = node
          return (
            <li key={node.slug}>
              <h2>{title}</h2>
              <p>{date}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

TagTemplate.propTypes = {
  data: PropTypes.shape({
    allPublicationsJson: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            title: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
          }),
        })
      ),
      totalCount: PropTypes.number.isRequired,
    }),
  }),
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
}

export default TagTemplate

export const pageQuery = graphql`
  query($tag: String) {
    allPublicationsJson(filter: { tags: { in: [$tag] } }) {
      edges {
        node {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
        }
      }
      totalCount
    }
  }
`
