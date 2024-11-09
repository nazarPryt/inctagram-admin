import { getAuthorizedLayout } from '@/_app/layouts/Authorized'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { Button } from '@nazar-pryt/inctagram-ui-kit'

export default function StatisticsPage() {
  const { t } = useTranslation()
  const handle = () => {
    throw new Error('StatisticsPage some error message!!!')
  }

  return (
    <div>
      {t.statistics_page.title}
      <Button onClick={handle}>throw error to check in Sentry</Button>
    </div>
  )
}
StatisticsPage.getLayout = getAuthorizedLayout
