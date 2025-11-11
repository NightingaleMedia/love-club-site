import React from 'react'

import { graphql, HeadFC, navigate, PageProps } from 'gatsby'
import { DesignerHero } from '../components/designerHero/designerHero'
import { DesignerAbout } from '../components/designerAbout/designerAbout'
import { DesignerFavoritesCarousel } from '../components/designerFavoritesCarousel/designerFavoritesCarousel'
import { DesignerPreShopButton } from '../components/preShopButton/preShopButton'
import { MainWrap } from '../components/MainWrap'
import { IGatsbyPageComponent } from 'gatsby/dist/redux/types'
import { Box, Button } from '@mui/material'
import { BookNowButton } from '../components/bookNowButton/bookNowButton'
import { theme } from '../theme'
import { ArrowLeft, ChevronLeft } from '@mui/icons-material'

interface DesignerLayoutProps {}

const DesignerLayout = ({
  data: { strapiDesigner },
}: PageProps<Queries.DesignerLayoutQuery>) => {
  return (
    <MainWrap fullWidthFooter={false}>
      <BookNowButton />
      <Box
        sx={{
          maxWidth: '1024px',
          margin: 'auto',
          backgroundColor: theme.palette.background.paper,
          position: 'relative',
        }}
      >
        <Box
          sx={(theme) => ({
            // backgroundColor: theme.palette.background.default,
            py: 2,
            position: 'absolute',
            zIndex: 10,
            left: 10,
          })}
        >
          <Button
            color="error"
            variant="text"
            startIcon={<ChevronLeft fontSize="large" />}
            onClick={() => navigate(-1)}
            sx={{ textShadow: '1px 1px 8px rgba(0, 0, 0, 0.7)' }}
          >
            Back
          </Button>
        </Box>
        <DesignerHero
          desktopProps={{
            image:
              strapiDesigner?.ImageDesktop?.[0]?.localFile?.childImageSharp
                ?.gatsbyImageData!,
            alt: '',
          }}
          mobileProps={{
            image:
              strapiDesigner?.ImageMobile?.localFile?.childImageSharp
                ?.gatsbyImageData!,
            alt: '',
          }}
        />
        <Box
          component={'section'}
          sx={(theme) => ({
            marginTop: 8,
            [theme.breakpoints.down('sm')]: { px: 4 },
          })}
        >
          <DesignerAbout
            title={strapiDesigner?.Name || ''}
            description={strapiDesigner?.ShortDescription || ''}
            longDescription={
              strapiDesigner?.LongDescription?.[0]?.children?.[0]?.text
            }
            priceRangeLow={strapiDesigner?.PriceRangeLow}
            priceRangeHigh={strapiDesigner?.PriceRangeHigh}
          />
        </Box>
        <Box component={'section'} sx={(theme) => ({ marginTop: 8 })}>
          <DesignerFavoritesCarousel
            images={strapiDesigner?.Looks?.flatMap((l) => ({
              ...l.Picture?.localFile?.childImageSharp?.gatsbyImageData,
              alt: l.altText,
            }))}
          />
        </Box>
        <Box component={'section'}>
          <DesignerPreShopButton />
        </Box>
        {/* {JSON.stringify(props, null, 2)} */}
      </Box>
    </MainWrap>
  )
}

export const pageQuery = graphql`
  query DesignerLayout($id: Int!) {
    strapiDesigner(strapi_id: { eq: $id }) {
      id
      strapi_id
      ShortDescription
      PriceRangeLow
      PriceRangeHigh
      Name
      LongDescription {
        children {
          text
        }
      }
      ImageDesktop {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 1440)
          }
        }
      }
      ImageMobile {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
      Looks {
        altText
        Picture {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 500)
            }
          }
        }
      }
    }
  }
`

export default DesignerLayout

export const Head: HeadFC = () => <title>The Love Club Bridal</title>
