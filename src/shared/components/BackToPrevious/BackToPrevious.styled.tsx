import { IconColor, typography } from '@nazar-pryt/inctagram-ui-kit'
import { styled } from 'styled-components'

export const BackToPreviousWrapper = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  color: ${props => props.theme.textColor[100]};
  font-family: inherit;

  ${IconColor}
  ${typography.Medium_text_14}
  

    &:hover {
    color: ${props => props.theme.textColor[500]};
    text-decoration: underline;
  }

  span {
    margin-left: 15px;
  }
`
