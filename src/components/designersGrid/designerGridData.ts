import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface Designer {
  name: string
  description: string
  imageName: string
  imageData?: IGatsbyImageData
  slug: string
}
export const designerGridData: Array<Designer> = [
  {
    name: 'Anais Anette',
    description: 'Description for Anais Anette',
    imageName: 'anais-anette.jpg',
    slug: 'anais-anette',
  },
  {
    name: 'Alena Lena',
    description: 'Description for Alena Lena',
    imageName: 'alena-leena.jpg',
    slug: 'alena-leena',
  },
  {
    name: 'Dany Tabet',
    description: 'Description for Dany Tabet',
    imageName: 'dany-tabet.jpg',
    slug: 'dany-tabet',
  },
  {
    name: 'Grace Loves Lace',
    description: 'Description for Grace Loves Lace',
    imageName: 'grace-loves-lace.png',
    slug: 'grace-loves-lace',
  },
  {
    name: 'Saint',
    description: 'Description for Saint',
    imageName: 'saint.jpg',
    slug: 'saint',
  },
  {
    name: 'Watters',
    description: 'Description for Saint',
    imageName: 'watters.jpg',
    slug: 'watters',
  },
  {
    name: 'White April',
    description: 'Description for White April',
    imageName: 'white-april.jpg',
    slug: 'white-april',
  },
  {
    name: 'Zavana Couture',
    description: 'Description for Zavana Couture',
    imageName: 'zavana-couture.jpg',
    slug: 'zavana-couture',
  },
]
