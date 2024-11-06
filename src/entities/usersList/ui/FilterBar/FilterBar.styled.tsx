import { breakpoints } from '@/shared/styles/ViewPort'
import { styled } from 'styled-components'

export const FilterBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;

  @media (max-width: ${breakpoints.mobileSmall}px) {
    flex-direction: column;
    gap: 5px;
  }
`
