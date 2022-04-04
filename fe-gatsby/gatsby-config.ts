import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `SliceSlicks`,
    siteUrl: `https://yidaoj.github.io/my-portfoliox`
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
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /\.inline\.svg$/
      }
    }
  },
  "gatsby-plugin-styled-components",
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp"
  ]
}
export default config