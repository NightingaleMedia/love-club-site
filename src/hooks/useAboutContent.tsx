import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export const useAboutContent = () => {
  const content = useStaticQuery(graphql`
    query AboutUsQuery {
      strapiAbout {
        title
        description {
          children {
            text
          }
        }
      }
    }
  `)

  return {
    title: content.strapiAbout.title,
    descriptionParagraphs: content.strapiAbout.description.flatMap(
      (d) => d.children[0].text
    ),
  }
}
