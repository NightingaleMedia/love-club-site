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
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: `http://127.0.0.1:1337`,
        accessToken:
          '272da957d1eb9f7d49fc1cb6888a742ff5748a539a574e6c3b9cbdf3ebee57cb8ae265f4692b7fd0967b229fb2efeb952f907502bbc14e65f9e84a03753947f0cff46169124ea1feef8cc9c1ac3ff3e87b0d1336dfb2a6163281ff21a7bd14237047d4cff01d7f12b99d6de62a17e02dd33e680b711f1649def77d32906784ed',
        collectionTypes: [
          {
            singularName: 'about',
          },
          {
            singularName: 'designer',
            queryParams: {
              populate: {
                Looks: {
                  populate: '*',
                },
                ImageDesktop: {
                  populate: '*',
                },
                ImageMobile: {
                  populate: '*',
                },
              },
            },
          },
        ],
        singleTypes: [],
      },
    },
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
        siteUrl: `https://www.theloveclubbridal.com`,
      },
    },
  ],
}

export default config
