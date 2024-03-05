import { ProfileStyled } from '@/entities/profileInfo/ui/Profile/Profile.styled'
import { ProfileInfo } from '@/entities/profileInfo/ui/ProfileInfo'
import { ProfileTabs } from '@/entities/profileInfo/ui/ProfileTabs'
import { PATH } from '@/shared/constants/PATH'
import { BackToPrevious } from '@nazar-pryt/inctagram-ui-kit'
import { useRouter } from 'next/router'

export const Profile = ({ userId }: { userId: number }) => {
  const router = useRouter()

  return (
    <ProfileStyled>
      {/* Todo change */}
      {/*<BackToPrevious href={PATH.USERS} title={'Back to Users List'} />*/}
      <BackToPrevious href={'#'} onClick={() => router.back()} title={'Back to last page'} />
      <ProfileInfo userID={userId} />
      <ProfileTabs userId={userId} />
    </ProfileStyled>
  )
}
