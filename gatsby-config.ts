import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `The Love Club Bridal`,
    description: `The Love Club Bridal - Your dream wedding dress awaits`,
    twitterUsername: `@theloveclubbridal`,
    instagramUsername: `@theloveclubbridal`,
    image: `/assets/img/hero1-metatag.png`,
    siteUrl: `https://www.theloveclubbridal.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-theme-material-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'designers',
        path: `${__dirname}/src/components/designersGrid`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Love Club Bridal`,
        short_name: `The Love Club`,
        start_url: `/`,
        background_color: `#eae5da`,
        theme_color: `#ff8cc6`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
}

export default config
