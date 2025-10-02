import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface Designer {
  name: string
  description: string
  imageName: string
  imageData: IGatsbyImageData
}
export const designerGridData: Array<Designer> = [
  {
    name: 'Anais Anette',
    description: 'Description for Anais Anette',
    imageName: 'anais-anette.jpg',
  },
  {
    name: 'Alena Lena',
    description: 'Description for Alena Lena',
    imageName: 'alena-leena.jpg',
  },
  {
    name: 'Dany Tabet',
    description: 'Description for Dany Tabet',
    imageName: 'dany-tabet.jpg',
  },
  {
    name: 'Grace Loves Lace',
    description: 'Description for Grace Loves Lace',
    imageName: 'grace-loves-lace.png',
  },
  {
    name: 'Saint',
    description: 'Description for Saint',
    imageName: 'saint.jpg',
  },
  {
    name: 'Watters',
    description: 'Description for Saint',
    imageName: 'watters.jpg',
  },
  {
    name: 'White April',
    description: 'Description for White April',
    imageName: 'white-april.jpg',
  },
  {
    name: 'Zavana Couture',
    description: 'Description for Zavana Couture',
    imageName: 'zavana-couture.jpg',
  },
]
