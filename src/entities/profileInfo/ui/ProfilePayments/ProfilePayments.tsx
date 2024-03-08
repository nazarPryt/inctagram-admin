import { useProfilePayments } from '@/entities/profileInfo/hook/useProfilePayments'
import { IsEmpty } from '@/shared/components/IsEmpty'
import { useTranslation } from '@/shared/hooks/useTranslation'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSkeleton,
} from '@nazar-pryt/inctagram-ui-kit'

import { usePaymentsListHeader } from '../../hook/useProfilePaymentsHeader'
import { ProfilePaymentsStyled } from './ProfilePayments.styled'

export const ProfilePayments = ({ userID }: { userID: number }) => {
  const { data, loading, sort } = useProfilePayments({ userID })
  const { t } = useTranslation()

  const paymentsListHeader = usePaymentsListHeader()

  if (loading) {
    return <TableSkeleton columns={5} rows={5} />
  }
  if (data?.getPaymentsByUser.items.length) {
    return (
      <ProfilePaymentsStyled>
        <Table>
          <TableHead columns={paymentsListHeader} sort={sort} />
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
