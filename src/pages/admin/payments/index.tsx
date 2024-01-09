import { PaymentsList } from '@/entities/paymentsList/ui/PaymentsList/PaymentsList'
import { getAuthorizedLayout } from '@/shared/layouts/Authorized'

export default function PaymentsPage() {
  return <PaymentsList />
}
PaymentsPage.getLayout = getAuthorizedLayout
