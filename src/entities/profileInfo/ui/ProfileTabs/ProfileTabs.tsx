import { ProfilePayments } from '@/entities/profileInfo/ui/ProfilePayments/ProfilePayments'
import { TabContent, Tabs } from '@nazar-pryt/inctagram-ui-kit'

import { ProfileTabsStyled } from './ProfileTabs.styled'

export const ProfileTabs = ({ userId }: { userId: number }) => {
  const tabs = [
    { title: 'Uploaded files', value: 'UploadedFiles' },
    { title: 'Payments', value: 'Payments' },
    { title: 'Followers', value: 'Followers' },
    { title: 'Following', value: 'Following' },
  ]

  return (
    <ProfileTabsStyled>
      <Tabs defaultValue={'Payments'} fullWidth tabs={tabs}>
        <TabContent value={'Following'}>Content for Following</TabContent>
        <TabContent value={'Followers'}>Content for Followers</TabContent>
        <TabContent value={'Payments'}>
          <ProfilePayments userID={userId} />
        </TabContent>
        <TabContent value={'UploadedFiles'}>Content for UploadedFiles</TabContent>
      </Tabs>
    </ProfileTabsStyled>
  )
}
