import { useProfilePayments } from '@/entities/profileInfo/hook/useProfilePayments'
import { IsEmpty } from '@/shared/components/IsEmpty'
import { useTranslation } from '@/shared/hooks/useTranslation'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadColumnType,
  TableRow,
  TableSkeleton,
} from '@nazar-pryt/inctagram-ui-kit'

import { ProfilePaymentsStyled } from './ProfilePayments.styled'
import { PaymentsListHeader } from './ProfilePaymentsHeader'

export const ProfilePayments = ({ userID }: { userID: number }) => {
  const { data, loading, pageNumber, pagesize, setOnSort, setPageNumber, setPageSize, sort } =
    useProfilePayments({ userID })
  const { t } = useTranslation()

  // Todo Change PaymentsListHeader1 || PaymentsListHeader
  const PaymentsListHeader1: TableHeadColumnType[] = [
    {
      key: 'Date-of-Payment',
      sortable: true,
      title: t.table.payment_date,
    },
    {
      key: 'End-date-of-subscription',
      sortable: true,
      title: t.table.payment_end_date_sub,
    },
    {
      key: 'amount',
      sortable: true,
      title: t.table.amount,
    },
    {
      key: 'subscription',
      sortable: true,
      title: t.table.subscription,
    },
    {
      key: 'payment',
      sortable: true,
      title: t.table.payment_method,
    },
  ]

  if (loading) {
    return <TableSkeleton columns={5} rows={5} />
  }
  if (data?.getPaymentsByUser.items.length) {
    return (
      <ProfilePaymentsStyled>
        <Table>
          <TableHead columns={PaymentsListHeader1} sort={sort} />
          <TableBody>
            {data?.getPaymentsByUser.items.map(payment => {
              return (
                <TableRow key={payment.id}>
                  <TableCell>
                    {new Date(payment.dateOfPayment).toLocaleDateString('ru-RU')}
                  </TableCell>
                  <TableCell>{new Date(payment.endDate).toLocaleDateString('ru-RU')}</TableCell>
                  <TableCell>{payment.price}</TableCell>
                  <TableCell>{payment.type}</TableCell>
                  <TableCell>{payment.paymentType}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </ProfilePaymentsStyled>
    )
  }

  return <IsEmpty text={t.profile_payments.not_payments} />
}
