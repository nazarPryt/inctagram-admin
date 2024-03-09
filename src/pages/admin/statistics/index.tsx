import { getAuthorizedLayout } from '@/_app/layouts/Authorized'
import { useTranslation } from '@/shared/hooks/useTranslation'

export default function StatisticsPage() {
  const { t } = useTranslation()

  return <div>{t.statistics_page.title}</div>
}
StatisticsPage.getLayout = getAuthorizedLayout
