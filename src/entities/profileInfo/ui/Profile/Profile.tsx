import { ProfileInfo } from '@/entities/profileInfo/ui/ProfileInfo'
import { ProfileTabs } from '@/entities/profileInfo/ui/ProfileTabs'
import { BackToPrevious } from '@/shared/components/BackToPrevious'
import { useTranslation } from '@/shared/hooks/useTranslation'

import { ProfileStyled } from './Profile.styled'

export const Profile = ({ userId }: { userId: number }) => {
  const { t } = useTranslation()

  return (
    <ProfileStyled>
      <BackToPrevious title={t.common.back_to_last} />
      <ProfileInfo userID={userId} />
      <ProfileTabs userId={userId} />
    </ProfileStyled>
  )
}
