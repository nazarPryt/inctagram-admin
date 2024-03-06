import { getAuthorizedLayout } from '@/_app/layouts/Authorized'
import { PaymentsList } from '@/entities/paymentsList/ui/PaymentsList'

export default function PaymentsPage() {
  return <PaymentsList />
}
PaymentsPage.getLayout = getAuthorizedLayout
