import { GatsbyNode } from 'gatsby'
import path from 'path'

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  reporter,
  graphql,
}) => {
  const { createPage } = actions

  // Define a template for blog post
  const designerTemplate = path.resolve('./src/layouts/designerLayout.tsx')

  const result: {
    errors?: any
    data?: { d: { nodes: any[] } }
  } = await graphql(`
    query AllDesignersForPages {
      d: allStrapiDesigner {
        nodes {
          id: strapi_id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )
    return
  }
  const dNodes = result.data?.d.nodes!
  const designers = dNodes.flatMap((a) => ({
    slug: a.slug,
    id: a.id,
  }))
  if (designers.length > 0) {
    designers.forEach((designer) => {
      console.log(
        `Creating page for designer: ${JSON.stringify(designer, null, 2)}`
      )
      createPage({
        path: `/designers/${designer.slug}`,
        component: designerTemplate,
        context: {
          slug: designer.slug,
          id: designer.id,
          strapi_id: designer.id,
        },
      })
    })
  }
}
