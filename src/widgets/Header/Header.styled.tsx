import { typography } from '@nazar-pryt/inctagram-ui-kit'
import { styled } from 'styled-components'

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 0 10px;
  border-bottom: 1px solid ${props => props.theme.bodyColor['100']};
  margin-bottom: 24px;
  z-index: 2;
  background-color: ${props => props.theme.bodyColor['700']};

  a {
    padding: 12px 0;
    text-decoration: none;
    ${props => props.theme.typography.Large}
    color: ${props => props.theme.textColor['100']};

    span {
      ${typography.Semi_bold_small_text}
    }
  }

  .block {
    display: flex;
    gap: 15px;
  }
`
