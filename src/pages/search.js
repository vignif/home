import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"

const highlightText = (text, query) => {
  if (!query || !text) return text
  const regex = new RegExp(`(\\b${query}\\b)`, "gi")
  return text.replace(regex, "<mark>$1</mark>")
}

// Helper function to parse dates into comparable format
const parseDate = dateString => {
  if (!dateString) return new Date(0) // Default to oldest date if no date
  return new Date(dateString)
}

const SearchPage = ({ data, location }) => {
  const query = new URLSearchParams(location.search).get("s") || ""

  // Process blog posts
  const blogPosts = data.blogPosts.edges.map(edge => ({
    id: edge.node.id,
    type: "blog",
    title: edge.node.childMarkdownRemark?.frontmatter?.title || "",
    subtitle: edge.node.childMarkdownRemark?.frontmatter?.subtitle || "",
    date: edge.node.childMarkdownRemark?.frontmatter?.date || "",
    rawDate: parseDate(edge.node.childMarkdownRemark?.frontmatter?.date),
    slug: `/blog${edge.node.childMarkdownRemark?.fields?.slug || ""}`,
    content: edge.node.childMarkdownRemark?.rawMarkdownBody || "",
    excerpt: edge.node.childMarkdownRemark?.excerpt || "",
  }))

  // Process publications
  const publications = data.publications.nodes.map(node => ({
    id: node.id,
    type: "publication",
    title: node.title || "",
    abstract: node.abstract || "",
    date: node.date || "",
    rawDate: parseDate(node.date),
    slug: `/publications/${node.slug || ""}`,
    content: node.abstract || "",
    excerpt: node.abstract ? `${node.abstract.substring(0, 160)}...` : "",
  }))

  // Process miscellaneous publications
  const miscPublications = data.misc.nodes.map(node => ({
    id: node.id,
    type: node.type || "misc",
    title: node.title || "",
    date: node.date || "",
    rawDate: parseDate(node.date),
    slug: node.attach
      ? node.attach.publicURL
      : `/publications/${node.slug || ""}`,
    content: "", // No content for misc
    excerpt: "",
  }))

  // Combine all content and sort by date (newest first)
  const allContent = [...blogPosts, ...publications, ...miscPublications].sort(
    (a, b) => b.rawDate - a.rawDate
  )

  const filteredContent = allContent.filter(item => {
    const searchFields = [
      item.title,
      item.subtitle,
      item.abstract,
      item.content,
      item.excerpt,
    ].filter(Boolean)

    // Create regex to match whole words only
    const wordRegex = new RegExp(`\\b${query}\\b`, "i")

    return searchFields.some(field => wordRegex.test(field))
  })

  return (
    <Layout>
      <section className="container py-5">
        <h1>Search Results</h1>
        {query && (
          <p className="mb-4">
            Found {filteredContent.length} result
            {filteredContent.length !== 1 ? "s" : ""} for "
            <strong>{query}</strong>"
          </p>
        )}

        {filteredContent.length > 0 ? (
          <div className="search-results text-start">
            {filteredContent.map(item => {
              // Find the best match position
              const fullContent = [
                item.title,
                item.subtitle,
                item.abstract,
                item.content,
                item.excerpt,
              ]
                .filter(Boolean)
                .join(" ")

              const wordRegex = new RegExp(`\\b${query}\\b`, "i")
              const match = wordRegex.exec(fullContent)

              let snippet = ""
              if (match) {
                const matchIndex = match.index
                const snippetStart = Math.max(0, matchIndex - 50)
                const snippetEnd = Math.min(
                  fullContent.length,
                  matchIndex + query.length + 50
                )
                snippet = fullContent.substring(snippetStart, snippetEnd)
                if (snippetStart > 0) snippet = "..." + snippet
                if (snippetEnd < fullContent.length) snippet += "..."
              } else {
                snippet = item.excerpt || item.abstract || item.subtitle || ""
                if (snippet.length > 160) {
                  snippet = snippet.substring(0, 160) + "..."
                }
              }

              const typeLabel =
                item.type === "blog"
                  ? "Blog Post"
                  : item.type === "misc"
                  ? "Miscellaneous"
                  : "Publication"

              return (
                <article
                  key={item.id}
                  className="search-result mb-3 p-3 bg-light rounded"
                >
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h3 className="h4 mb-2 d-inline">
                        <Link to={item.slug} className="text-decoration-none ">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: highlightText(item.title, query),
                            }}
                          />
                        </Link>
                      </h3>
                    </div>
                    <span className="badge bg-secondary">{typeLabel}</span>
                  </div>
                  {item.date && (
                    <small className="text-muted">{item.date}</small>
                  )}
                  {item.subtitle && (
                    <p className="text-muted mb-2">{item.subtitle}</p>
                  )}
                  <div
                    className="search-snippet mb-2"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(snippet, query),
                    }}
                  />
                </article>
              )
            })}
          </div>
        ) : query ? (
          <div className="alert alert-info">
            No results found for "<strong>{query}</strong>". Try different
            keywords.
          </div>
        ) : (
          <div className="alert alert-warning">
            Please enter a search term in the search box.
          </div>
        )}
      </section>
    </Layout>
  )
}

export default SearchPage

export const Head = () => <Seo title="Search" />

export const query = graphql`
  query {
    blogPosts: allFile(
      filter: { sourceInstanceName: { eq: "blog" } }
      sort: { childrenMarkdownRemark: { frontmatter: { date: DESC } } }
    ) {
      edges {
        node {
          id
          childMarkdownRemark {
            excerpt(pruneLength: 160)
            rawMarkdownBody
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "DD MMM, YYYY")
              subtitle
            }
          }
        }
      }
    }
    publications: allPublicationsJson(sort: { date: DESC }) {
      nodes {
        id
        abstract
        slug
        title
        date(formatString: "MMM YYYY")
      }
    }
    misc: allMiscpubsJson(sort: { date: DESC }) {
      nodes {
        id
        title
        date(formatString: "MMM YYYY")
        slug
        type
        attach {
          publicURL
        }
      }
    }
  }
`
