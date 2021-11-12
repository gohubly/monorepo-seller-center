// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { css } from 'styled-components'

export const mediaSizes = {
  uhd: 1920,
  widescreen: 1366,
  hd: 1280,
  desktop: 1024,
  tablet: 768,
  mobile: 468,
}

const media: IMediaQueryReturn = Object.keys(mediaSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${mediaSizes[label]}px) {
      // @ts-ignore
      ${css(...args)}
    }
  `
  return acc
}, {})

export default media
