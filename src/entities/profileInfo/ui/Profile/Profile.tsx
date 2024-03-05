import { ProfileInfo } from '@/entities/profileInfo/ui/ProfileInfo'
import { ProfileTabs } from '@/entities/profileInfo/ui/ProfileTabs'
import { BackToPrevious } from '@/shared/components/BackToPrevious'

import { ProfileStyled } from './Profile.styled'

export const Profile = ({ userId }: { userId: number }) => {
  return (
    <ProfileStyled>
      <BackToPrevious title={'Back to dashboard'} />
      <ProfileInfo userID={userId} />
      <ProfileTabs userId={userId} />
    </ProfileStyled>
  )
}
