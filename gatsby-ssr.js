/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: "en" })

  // Matomo Analytics
  setHeadComponents([
    React.createElement("script", {
      key: "matomo",
      dangerouslySetInnerHTML: {
        __html: `
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//analytics.francescovigni.com/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
        `.trim(),
      },
    }),
  ])

  // Optional noscript fallback pixel for Matomo
  setPreBodyComponents([
    React.createElement("noscript", { key: "matomo-noscript" },
      React.createElement("p", null,
        React.createElement("img", {
          src: "https://analytics.francescovigni.com/matomo.php?idsite=1&rec=1",
          style: { border: 0 },
          alt: "",
        })
      )
    ),
  ])
}
