import { Table } from '@nazar-pryt/inctagram-ui-kit'
import { styled } from 'styled-components'

export const UsersListStyled = styled(Table)`
  svg {
    path {
      fill: ${props => props.theme.textColor[100]};
    }
    line {
      stroke: ${props => props.theme.textColor[100]};
    }
  } //todo move to ui-kit (make it default)
`
