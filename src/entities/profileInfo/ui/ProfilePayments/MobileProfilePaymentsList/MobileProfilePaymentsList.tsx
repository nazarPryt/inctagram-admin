import { GetUserPaymentsQuery } from '@/entities/profileInfo/api/getUserPayments/getUserPayments.api.types'
import { usePaymentsListHeader } from '@/entities/profileInfo/hook/useProfilePaymentsHeader'
import { toLocalFormat } from '@/shared/utils/toLocalFormat'
import { TableSkeleton } from '@nazar-pryt/inctagram-ui-kit'

import { MobileProfilePaymentsListStyled } from './MobileProfilePaymentsList.styled'

export type Props = {
  loading: boolean
  payments: GetUserPaymentsQuery['getPaymentsByUser']['items']
}

export const MobileProfilePaymentsList = ({ loading, payments }: Props) => {
  const paymentsListHeader = usePaymentsListHeader()

  if (loading) {
    return <TableSkeleton columns={1} rows={5} />
  }

  return (
    <MobileProfilePaymentsListStyled>
      {payments.map(payment => (
        <table key={payment.id}>
          <thead>
            <tr>
              {paymentsListHeader.map(header => (
                <th key={header.title}>{header.title}:</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{toLocalFormat(payment.dateOfPayment)}</td>
            </tr>
            <tr>
              <td>{toLocalFormat(payment.endDate)}</td>
            </tr>
            <tr>
              <td>{payment.price}</td>
            </tr>
            <tr>
              <td>{payment.type}</td>
            </tr>
            <tr>
              <td>{payment.paymentType}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </MobileProfilePaymentsListStyled>
  )
}
