import { breakpoints } from '@/shared/styles/ViewPort'
import { styled } from 'styled-components'

export const ProfileFilesListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;

  @media (max-width: ${breakpoints.mobile}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${breakpoints.mobileSmall}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
