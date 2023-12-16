import { PaymentsList } from '@/entities/paymentsList/ui/paymentsList'
import { getAuthorizedLayout } from '@/shared/layouts/Authorized/AuthorizedLayout'

export default function PaymentsPage() {
  return (
    <div>
      <PaymentsList />
    </div>
  )
}
PaymentsPage.getLayout = getAuthorizedLayout
