import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const Seo = ({ 
  title, 
  description, 
  pathname, 
  children,
  article = false,
  datePublished,
  dateModified,
  author = "Francesco Vigni"
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  // Structured data for person/organization
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Francesco Vigni",
    jobTitle: "Machine Learning and AI Engineer",
    url: siteUrl,
    sameAs: [
      "https://x.com/fra_cescovigni",
      "https://github.com/francescovigni",
      "https://linkedin.com/in/francesco-vigni/",
      "https://scholar.google.com/citations?user=ksO3xN0AAAAJ&hl=en"
    ],
    alumniOf: {
      "@type": "Organization",
      name: "University of Naples Federico II"
    }
  }

  // Article structured data (for blog posts)
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: seo.title,
    description: seo.description,
    image: seo.image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author
    },
    publisher: {
      "@type": "Person",
      name: "Francesco Vigni"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": seo.url
    }
  } : null

  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      
      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:site_name" content="Francesco Vigni" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
      
      {/* Favicon */}
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
      
      {children}
    </>
  )
}
