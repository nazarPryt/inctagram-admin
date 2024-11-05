import { breakpoints } from '@/shared/styles/ViewPort'
import { styled } from 'styled-components'

export const UsersListStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  table {
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    > div:nth-child(3) {
      flex-direction: column;
      gap: 5px;
    }
  }
`
