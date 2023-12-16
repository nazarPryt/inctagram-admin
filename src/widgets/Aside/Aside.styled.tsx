import { typography } from '@nazar-pryt/inctagram-ui-kit'
import { styled } from 'styled-components'

export const AsideStyled = styled.aside`
  position: sticky;
  top: 85px;
  height: calc(100vh - 100px);
  border-right: 1px solid ${props => props.theme.bodyColor['100']};

  ${typography.Medium_text_14()}

  nav {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  button {
    margin-top: 60px;
  }
`
