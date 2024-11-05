import { ProfileFiles } from '@/entities/profileFiles'
import { useProfileInfoTableTitle } from '@/entities/profileInfo/hook/useProfileInfoTableTitle'
import { ProfilePayments } from '@/entities/profileInfo/ui/ProfilePayments/ProfilePayments'
import { useScreenDetector } from '@/shared/hooks/useAdaptive'
import { TabContent, Tabs } from '@nazar-pryt/inctagram-ui-kit'

import { ProfileTabsStyled } from './ProfileTabs.styled'

export const ProfileTabs = ({ userId }: { userId: number }) => {
  const tabsTitle = useProfileInfoTableTitle()
  const { isMobile } = useScreenDetector()

  return (
    <ProfileTabsStyled>
      <Tabs defaultValue={'Payments'} fullWidth showIcon={isMobile} tabs={tabsTitle}>
        <TabContent value={'Following'}>t.table.content_following</TabContent>
        <TabContent value={'Followers'}>t.table.content_followers</TabContent>
        <TabContent value={'Payments'}>
          <ProfilePayments userID={userId} />
        </TabContent>
        <TabContent value={'UploadedFiles'}>
          <ProfileFiles userId={userId} />
        </TabContent>
      </Tabs>
    </ProfileTabsStyled>
  )
}
