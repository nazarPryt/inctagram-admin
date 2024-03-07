import { ProfilePayments } from '@/entities/profileInfo/ui/ProfilePayments/ProfilePayments'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { TabContent, Tabs } from '@nazar-pryt/inctagram-ui-kit'

import { ProfileTabsStyled } from './ProfileTabs.styled'

export const ProfileTabs = ({ userId }: { userId: number }) => {
  const { t } = useTranslation()
  const tabs = [
    { title: t.table.uploaded_files, value: 'UploadedFiles' },
    { title: t.table.payments, value: 'Payments' },
    { title: t.table.followers, value: 'Followers' },
    { title: t.table.following, value: 'Following' },
  ]

  return (
    <ProfileTabsStyled>
      <Tabs defaultValue={'Payments'} fullWidth tabs={tabs}>
        <TabContent value={'Following'}>{t.table.content_following}</TabContent>
        <TabContent value={'Followers'}>{t.table.content_followers}</TabContent>
        <TabContent value={'Payments'}>
          <ProfilePayments userID={userId} />
        </TabContent>
        <TabContent value={'UploadedFiles'}>{t.table.content_uploaded_files}</TabContent>
      </Tabs>
    </ProfileTabsStyled>
  )
}
