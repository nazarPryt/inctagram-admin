import { useGetProfileInfoQuery } from '@/entities/profileInfo/api/getProfileInfo/getProfileInfo.api.types'
import { ProfileInfoSkeleton } from '@/shared/components/ProfileInfoSkeleton/ProfileInfoSkeleton'
import { Avatar } from '@nazar-pryt/inctagram-ui-kit'

import { ProfileInfoStyled } from './ProfileInfo.styled'

export const ProfileInfo = ({ userID }: { userID: number }) => {
  const { data, loading } = useGetProfileInfoQuery({
    variables: {
      userID,
    },
  })

  if (loading) {
    return <ProfileInfoSkeleton />
  }
  if (data) {
    const profile = data.getProfileInfo.profile
    const profileAvatar = profile.avatars?.length ? profile.avatars[1].url : ''
    const userName =
      profile.firstName && profile.lastName && profile.userName
        ? `${profile.firstName} ${profile.lastName}`
        : profile.userName || ''

    return (
      <ProfileInfoStyled>
        <div className={'avatarGroup'}>
          <Avatar size={60} src={profileAvatar} userName={userName} />
          <div>
            <h1>
              {profile.firstName} {profile.lastName}
            </h1>
            <p>{profile.userName}</p>
          </div>
        </div>
        <div className={'bottomGroup'}>
          <div>
            <div className={'blurText'}>UserID</div>
            <div className={'importantText'}>{profile.id}</div>
          </div>
          <div>
            <div className={'blurText'}>Profile Creation Date</div>
            <div className={'importantText'}>
              {new Date(profile.createdAt).toLocaleDateString('ru-RU')}
            </div>
          </div>
        </div>
      </ProfileInfoStyled>
    )
  }
}
