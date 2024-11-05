import { CSSObject, Interpolation, css } from 'styled-components'

// // Define a function to handle any breakpoint size
// export const media =
//   (maxWidth: number) =>
//   (...args: [CSSObject | TemplateStringsArray, ...Interpolation<any>[]]) => css`
//     @media (max-width: ${maxWidth}px) {
//       ${css(...args)};
//     }
//   `
//
// // Define commonly used breakpoints
export const breakpoints = {
  mobile: '767.98px',
  mobileSmall: '479.98px',
  pc: '1200px',
  tablet: '991.98px',
}

// Create media query shortcuts for commonly used breakpoints
// export const mediaMobile = media(breakpoints.mobile)
// export const mediaTablet = media(breakpoints.tablet)
// export const mediaDesktop = media(breakpoints.desktop)
// export const mediaLargeDesktop = media(breakpoints.largeDesktop)
