import { css } from 'styled-components'

export const ViewPort = {
  mobile: css`
    max-width: 768px; // Phones L
  `,
  mobileSmall: css`
    max-width: 480px; // Phones S
  `,
  pc: css`
    max-width: 1120px; // PC, laptops, some tablets in horizontal position
  `,
  tablet: '992px', // Tablets, some phones in horizontal position
}
