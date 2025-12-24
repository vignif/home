# Francesco Vigni - Personal Website

[![Gatsby](https://img.shields.io/badge/Gatsby-5.14-663399?logo=gatsby)](https://www.gatsbyjs.com/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.2-7952B3?logo=bootstrap)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A modern, performant personal website built with Gatsby, React, and Bootstrap. Features include blog posts, publications, news updates, and a full-text search functionality.

## 🚀 Features

- **Static Site Generation** with Gatsby for optimal performance
- **Blog System** with Markdown support and RSS feed
- **Publications Management** from JSON data
- **Full-Text Search** across all content
- **Responsive Design** with Bootstrap 5
- **SEO Optimized** with structured data (Schema.org), Open Graph, and Twitter Cards
- **Progressive Web App** (PWA) capabilities
- **Google Analytics** integration
- **Docker Support** for consistent development and deployment
- **RSS Feed** for blog subscribers
- **Sitemap** and robots.txt generation

## 📋 Prerequisites

- Node.js >= 20.16.0
- npm or yarn
- Docker (optional, for containerized development)

## 🛠️ Installation

### Local Development

```bash
# Clone the repository
git clone https://github.com/vignif/home.git
cd home

# Install dependencies
npm install

# Start development server
npm start
```

The site will be available at `http://localhost:8000`

GraphQL explorer: `http://localhost:8000/___graphql`

### Docker Development

```bash
# Build and run with Docker Compose
docker-compose up

# Or build manually
docker build -t francescovigni-website .
docker run -p 8000:8000 francescovigni-website
```

## 📁 Project Structure

```
.
├── data/                      # Data files
│   ├── blog/                 # Blog posts (Markdown)
│   ├── news/                 # News items (Markdown)
│   ├── images/               # Images for blog and publications
│   ├── videos/               # Video assets
│   ├── cv.json              # CV data
│   ├── publications.json    # Publications data
│   ├── miscpubs.json        # Miscellaneous publications
│   └── persons.json         # Person data
├── src/
│   ├── components/          # React components
│   │   ├── layout.js       # Main layout wrapper
│   │   ├── navbar.js       # Navigation bar
│   │   ├── seo.js          # SEO component with structured data
│   │   └── socials.js      # Social links
│   ├── pages/              # Page components
│   │   ├── index.js        # Home page
│   │   ├── about.js        # About page
│   │   ├── blog/           # Blog listing
│   │   ├── news.js         # News page
│   │   ├── publications/   # Publications listing
│   │   └── search.js       # Search page
│   ├── templates/          # Template components for dynamic pages
│   │   ├── blog-detail.js
│   │   ├── publication-detail.js
│   │   └── tag-template.js
│   └── hooks/              # Custom React hooks
├── gatsby-config.js        # Gatsby configuration
├── gatsby-node.js          # Gatsby Node APIs
├── gatsby-browser.js       # Gatsby Browser APIs
└── package.json

```

## 🎨 Available Scripts

```bash
# Development
npm start              # Start development server with hot reload
npm run clean          # Clean cache and public directories

# Production
npm run build          # Build for production
npm run serve          # Serve production build locally

# Code Quality
npm run format         # Format code (TypeScript & SCSS)
npm run lint           # Lint code
npm run lint:ts        # Lint TypeScript/JavaScript
npm run lint:scss      # Lint SCSS
```

## 📝 Content Management

### Adding a Blog Post

Create a new Markdown file in `data/blog/`:

```markdown
---
title: "Your Blog Post Title"
subtitle: "Optional subtitle"
date: "2024-12-22"
tags: ["tag1", "tag2"]
cover: "../images/blogs/your-image.jpg"
---

Your blog content here...
```

### Adding Publications

Edit `data/publications.json`:

```json
{
  "title": "Publication Title",
  "authors": ["Author 1", "Author 2"],
  "venue": "Conference/Journal Name",
  "date": "2024-12-22",
  "abstract": "Your abstract here...",
  "pdf": "link-to-pdf",
  "slug": "publication-slug"
}
```

### Adding News

Create a new Markdown file in `data/news/`:

```markdown
---
title: "News Title"
date: "2024-12-22"
---

Your news content...
```

## 🔧 Configuration

### Environment Variables

Create a `.env.development` file:

```env
# Google Analytics
GATSBY_GOOGLE_ANALYTICS_TRACKING_ID=G-XXXXXXXXXX

# Site URL
GATSBY_SITE_URL=http://localhost:8000
```

For production, create `.env.production`:

```env
GATSBY_GOOGLE_ANALYTICS_TRACKING_ID=G-XXXXXXXXXX
GATSBY_SITE_URL=https://francescovigni.com
```

### Site Metadata

Edit `gatsby-config.js` to update site metadata:

```javascript
siteMetadata: {
  title: `Your Name`,
  description: `Your description`,
  author: `@yourhandle`,
  siteUrl: `https://yoursite.com`,
  // ... other settings
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This generates optimized static files in the `public/` directory.

### Deploy to GitHub Pages

```bash
npm install -g gh-pages
gh-pages -d public
```

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `public`
4. Add environment variables in Netlify dashboard

### Deploy with Docker

```bash
docker build -t francescovigni-website .
docker run -p 80:80 francescovigni-website
```

## 🔍 SEO Features

- **Structured Data**: Schema.org JSON-LD for Person and BlogPosting
- **Open Graph**: Full OG tags for social media sharing
- **Twitter Cards**: Optimized for Twitter sharing
- **Sitemap**: Auto-generated at `/sitemap-index.xml`
- **Robots.txt**: Properly configured for search engines
- **RSS Feed**: Available at `/rss.xml`
- **Canonical URLs**: Prevent duplicate content issues

## 🎯 Performance Optimizations

- Static site generation for instant page loads
- Image optimization with gatsby-plugin-image
- Code splitting and lazy loading
- Offline support with service worker
- Minified CSS and JavaScript
- Optimized fonts loading

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Francesco Vigni**
- Website: [francescovigni.com](https://francescovigni.com)
- Twitter: [@fra_cescovigni](https://x.com/fra_cescovigni)
- GitHub: [@vignif](https://github.com/vignif)
- LinkedIn: [francesco-vigni](https://linkedin.com/in/francesco-vigni/)

## 🙏 Acknowledgments

- Built with [Gatsby](https://www.gatsbyjs.com/)
- Styled with [Bootstrap 5](https://getbootstrap.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Based on [gatsby-starter-bootstrap-5](https://github.com/r-ichard/gatsby-starter-bootstrap-5)

---

**Made with ❤️ by Francesco Vigni**
