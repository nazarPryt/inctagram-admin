import { GetAllPaymentsQuery } from '@/entities/paymentsList/api/getAllPayments.api.types'
import { usePaymentsListTableHeader } from '@/entities/paymentsList/hook/usePaymentsListTableHeader'
import { IsEmpty } from '@/shared/components/IsEmpty'
import { useTranslation } from '@/shared/hooks/useTranslation'
import {
  Avatar,
  TableBody,
  TableCell,
  TableHead,
  TableHeadSortType,
  TableRow,
  TableSkeleton,
} from '@nazar-pryt/inctagram-ui-kit'

import { PaymentsListTableStyled } from './PaymentsListTable.styled'

type PropsType = {
  loading: boolean
  onSort: (sort: TableHeadSortType) => void
  payments?: GetAllPaymentsQuery['getPayments']['items']
  sort: TableHeadSortType
}
export const PaymentsListTable = ({ loading, onSort, payments, sort }: PropsType) => {
  const { t } = useTranslation()

  const PaymentsListTableHeader = usePaymentsListTableHeader()

  if (loading) {
    return <TableSkeleton columns={5} rows={10} />
  }
  if (payments && !!payments?.length) {
    return (
      <PaymentsListTableStyled>
        <TableHead columns={PaymentsListTableHeader} onSort={onSort} sort={sort} />
        <TableBody>
          {payments.map(payment => {
            return (
              <TableRow key={payment.id}>
                <TableCell className={'userNameCell'}>
                  <Avatar
                    size={36}
                    src={payment.avatars?.length ? payment.avatars[0].url || '' : ''}
                    userName={payment.userName}
                  />
                  {payment.userName}
                </TableCell>
                <TableCell>{new Date(payment.createdAt).toLocaleDateString('ru-Ru')}</TableCell>
                <TableCell>
                  {payment.amount} {payment.currency}
                </TableCell>
                <TableCell>{payment.type}</TableCell>
                <TableCell>{payment.paymentMethod}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </PaymentsListTableStyled>
    )
  }

  return <IsEmpty text={t.table.payments_list_empty} />
}
