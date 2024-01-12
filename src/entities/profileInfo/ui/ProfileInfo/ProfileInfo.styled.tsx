import { typography } from '@nazar-pryt/inctagram-ui-kit'
import { styled } from 'styled-components'

export const ProfileInfoStyled = styled.div`
  margin: 30px 0;

  .avatarGroup {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 20px;
  }
  .bottomGroup {
    display: flex;
    align-items: center;
    gap: 50px;

    .blurText {
      ${typography.regular_text_14}
      color: ${props => props.theme.textColor[900]}
    }
    .importantText {
      ${typography.regular_text_16}
    }
  }
`
