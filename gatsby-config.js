// https://www.gatsbyjs.org/packages/gatsby-image/
const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Yumihiki's Portfolio Site`,
    description: `エンジニア志望のYumihikiのポートフォリオサイトです`,
    author: `@gatsbyjs`,
    siteUrl: `https://yumihiki-portfolio.netlify.com/`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-139439764-1"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/contents/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `contents/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        options: {
          tableOfContents: {
            heading: null,
            maxDepth: 6,
          },
        },
        plugins: [
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow, noopener, noreferrer"
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: false,
              className: `custom-class`,
              maintainCase: false,
            },
          },
          {
            resolve: 'gatsby-remark-toc',
            options: {
              header: '目次', // the custom header text
              include: [
                'contents/**/*.md' // an include glob to match against
              ],
              mdastUtilTocOptions: {
                maxDepth: 3
              }
            }
          },
          `gatsby-remark-component`
        ],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": path.resolve(__dirname),
          "@components": path.resolve(__dirname, 'src/components'),
          "@contents": path.resolve(__dirname, 'contents')
        },
        extensions: []
      }
    },
    `gatsby-plugin-netlify`
  ],
}
