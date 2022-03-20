/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "dx4yaf7p",
      dataset: 'production',
      watchMode: true,
      token: process.env.SANITY_TOKEN,
    }
  }, 
  "gatsby-plugin-styled-components",
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp"
  ]
};