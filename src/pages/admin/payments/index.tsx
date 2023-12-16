import { PaymentsList } from '@/entities/paymentsList/ui/paymentsList'
import { getAuthorizedLayout } from '@/shared/layouts/Authorized'

export default function PaymentsPage() {
  return <PaymentsList />
}
PaymentsPage.getLayout = getAuthorizedLayout
