import { GetAllPaymentsQuery } from '@/entities/paymentsList/api/getAllPayments.api.types'
import { usePaymentsListTableHeader } from '@/entities/paymentsList/hook/usePaymentsListTableHeader'
import { IsEmpty } from '@/shared/components/IsEmpty'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { toLocalFormat } from '@/shared/utils/toLocalFormat'
import { TableSkeleton } from '@nazar-pryt/inctagram-ui-kit'

import { MobilePaymentsListTableStyled } from './MobilePaymentsListTable.styled'

export type Props = {
  loading: boolean
  payments?: GetAllPaymentsQuery['getPayments']['items']
}

export const MobilePaymentsListTable = ({ loading, payments }: Props) => {
  const { t } = useTranslation()
  const PaymentsListTableHeader = usePaymentsListTableHeader()

  if (loading) {
    return <TableSkeleton columns={1} rows={4} />
  }
  if (!payments) {
    return <IsEmpty text={t.table.payments_list_empty} />
  }

  return (
    <MobilePaymentsListTableStyled>
      {payments.map(payment => (
        <table key={payment.id}>
          <thead>
            <tr>
              {PaymentsListTableHeader.map(header => (
                <th key={header.title}>{header.title}:</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{payment.userName}</td>
            </tr>
            <tr>
              <td>{toLocalFormat(payment.createdAt)}</td>
            </tr>
            <tr>
              <td>{payment.amount}</td>
            </tr>
            <tr>
              <td>{payment.type}</td>
            </tr>
            <tr>
              <td>{payment.paymentMethod}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </MobilePaymentsListTableStyled>
  )
}
