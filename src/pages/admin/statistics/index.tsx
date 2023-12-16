import { RemoveUser } from '@/features/removeUser/ui/RemoveUser'
import { getAuthorizedLayout } from '@/shared/layouts/Authorized'

export default function StatisticsPage() {
  return (
    <div>
      Statistics Page <RemoveUser />
    </div>
  )
}
StatisticsPage.getLayout = getAuthorizedLayout
