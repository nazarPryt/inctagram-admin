import { ProfileStyled } from '@/entities/profileInfo/ui/Profile/Profile.styled'
import { ProfileInfo } from '@/entities/profileInfo/ui/ProfileInfo'
import { ProfileTabs } from '@/entities/profileInfo/ui/ProfileTabs'
import { PATH } from '@/shared/constants/PATH'
import { BackToPrevious } from '@nazar-pryt/inctagram-ui-kit'

export const Profile = ({ userId }: { userId: number }) => {
  return (
    <ProfileStyled>
      <BackToPrevious href={PATH.USERS} title={'Back to Users List'} />
      <ProfileInfo userID={userId} />
      <ProfileTabs userId={userId} />
    </ProfileStyled>
  )
}
