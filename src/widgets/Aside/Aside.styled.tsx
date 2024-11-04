import { ViewPort } from '@/shared/styles/ViewPort'
import { typography } from '@nazar-pryt/inctagram-ui-kit'
import { styled } from 'styled-components'

export const AsideStyled = styled.aside`
  position: sticky;
  top: 85px;
  height: calc(100vh - 100px);
  border-right: 1px solid ${props => props.theme.bodyColor['100']};

  ${typography.Medium_text_14}

  nav {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  button {
    margin-top: 60px;
  }

  @media (min-width: ${ViewPort.tablet}) {
    display: flex;
    background-color: ${props => props.theme.bodyColor['100']};
    border: none;

    nav {
      width: 100%;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      gap: 0;

      a,
      button {
        gap: 0;
        padding: 20px;
        font-size: 0;
        margin: 0;

        span > svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`
