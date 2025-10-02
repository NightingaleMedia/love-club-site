import { useStaticQuery, graphql } from 'gatsby'

export const useAllDesigners = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { name: ASC } }) {
        edges {
          node {
            frontmatter {
              name
              imageName {
                name
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allMdx.edges.flatMap((edge) => {
    return {
      name: edge.node.frontmatter.name,
      description: edge.node.frontmatter.description,
      imageName: 'test',
      imageData: edge.node.frontmatter.imageName,
    }
  })
}
