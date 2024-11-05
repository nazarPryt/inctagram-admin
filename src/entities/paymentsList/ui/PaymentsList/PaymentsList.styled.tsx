import { breakpoints } from '@/shared/styles/ViewPort'
import { styled } from 'styled-components'

export const PaymentsListStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;

  table {
    width: 100%;
  }
  @media (max-width: ${breakpoints.tablet}px) {
    > div:nth-child(2) {
      flex-direction: column;
      gap: 5px;
    }
  }
`
