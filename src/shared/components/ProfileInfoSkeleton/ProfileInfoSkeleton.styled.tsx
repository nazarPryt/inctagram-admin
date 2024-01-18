import { typography } from '@nazar-pryt/inctagram-ui-kit'
import { styled } from 'styled-components'

export const ProfileInfoSkeletonStyled = styled.div`
  margin: 30px 0;
  display: inline-block;

  .avatarGroup {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 20px;
  }
  .nameBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
    div {
      display: flex;
      gap: 10px;
    }
  }

  .bottomGroup {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .blurText {
    ${typography.regular_text_14}
    color: ${props => props.theme.textColor[900]}
  }
`
