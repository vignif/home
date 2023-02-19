import React from "react"
import { graphql, Link } from "gatsby"

const TagsPage = ({ data }) => {
  const tags = data.allPublicationsJson.edges
    .map(edge => edge.node.tags)
    .flat()
    .filter((tag, index, self) => self.indexOf(tag) === index) // Remove duplicate tags
    .sort()

  return (
    <div>
      <h1>Tags</h1>
      <ul>
        {tags.map(tag => (
          <li key={tag}>
            <Link to={`/tags/${tag}`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </div>
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
