import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Blog = ({ data }) => {
  const blogPosts = data.allFile.edges;

  return (
    <Layout>
      <section className="text-center py-5">
        <h1 className="fw-bold">Projects</h1>
        <hr className="custom-hr" />
      </section>

      <section className="container">
        <div className="blog-grid">
          {blogPosts.map(({ node }) => {
            const { id, childMarkdownRemark } = node;
            const { title, date, subtitle, img } = childMarkdownRemark.frontmatter;
            const slug = childMarkdownRemark.fields.slug;
            const image = getImage(img);

            return (
              <div key={id} className="blog-card">
                {image && (
                  <Link to={`/blog${slug}`} aria-label={`Read more about ${title}`}>
                    <GatsbyImage
                      image={image}
                      alt={title}
                      className="blog-image"
                      loading="lazy"
                    />
                  </Link>
                )}
                <div className="blog-content">
                  <h3 className="blog-title">
                    <Link to={`/blog${slug}`} aria-label={`Read: ${title}`}>{title}</Link>
                  </h3>
                  <p className="blog-subtitle">{subtitle}</p>
                  <p className="blog-date">{date}</p>
                  <Link to={`/blog${slug}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="text-center my-5">
        <hr className="custom-hr" />
        <Link to="/" className="btn btn-primary btn-lg">🏡 Back to Home</Link>
      </div>
    </Layout>
  );
};

export default Blog;

export const Head = () => <Seo title="Blog" />;

export const query = graphql`
  query BLOGS {
    allFile(
      filter: { sourceInstanceName: { eq: "blog" } }
      sort: { childrenMarkdownRemark: { frontmatter: { date: DESC } } }
    ) {
      edges {
        node {
          id
          childMarkdownRemark {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "DD MMM, YYYY")
              subtitle
              img {
                childImageSharp {
                  gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    quality: 90
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`;
