import { GetAllPaymentsQuery } from '@/entities/paymentsList/api/getAllPayments.api.types'
import { TableSkeleton } from '@/shared/components/TableSkeleton/TableSkeleton'
import {
  Avatar,
  TableBody,
  TableCell,
  TableHead,
  TableHeadSortType,
  TableRow,
} from '@nazar-pryt/inctagram-ui-kit'

import { IsEmpty } from '../../../../shared/components/IsEmpty'
import { PaymentsListTableStyled } from './PaymentsListTable.styled'
import { PaymentsListTableHeader } from './PaymentsListTableHeader'

type PropsType = {
  loading: boolean
  onSort: (sort: TableHeadSortType) => void
  payments?: GetAllPaymentsQuery['getAllPayments']['items']
  sort: TableHeadSortType
}
export const PaymentsListTable = ({ loading, onSort, payments, sort }: PropsType) => {
  if (loading) {
    return <TableSkeleton />
  }
  if (payments) {
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
                    src={payment.avatars?.length ? payment.avatars[0].url : ''}
                    userName={payment.userName}
                  />
                  {payment.userName}
                </TableCell>
                <TableCell>{new Date(+payment.createdAt).toLocaleDateString('ru-Ru')}</TableCell>
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

  return <IsEmpty text={'Payments list is empty'} />
}
