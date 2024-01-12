import { Avatar } from '@nazar-pryt/inctagram-ui-kit'

import { ProfileInfoStyled } from './ProfileInfo.styled'

export const ProfileInfo = () => {
  return (
    <ProfileInfoStyled>
      <div className={'avatarGroup'}>
        <Avatar size={60} src={''} userName={'Ivan Yakimenko'} />
        <div>
          <h1>Ivan Yakimenko</h1>
          <p>Ivan.sr.yakimenko</p>
        </div>
      </div>
      <div className={'bottomGroup'}>
        <div>
          <div className={'blurText'}>UserID</div>
          <div className={'importantText'}>21331QErQe21</div>
        </div>
        <div>
          <div className={'blurText'}>Profile Creation Date</div>
          <div className={'importantText'}>12.12.2022</div>
        </div>
      </div>
    </ProfileInfoStyled>
  )
}
