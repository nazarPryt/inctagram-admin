import { GetUserPaymentsQuery } from '@/entities/profileInfo/api/getUserPayments/getUserPayments.api.types'
import { usePaymentsListHeader } from '@/entities/profileInfo/hook/useProfilePaymentsHeader'
import { IsEmpty } from '@/shared/components/IsEmpty'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { toLocalFormat } from '@/shared/utils/toLocalFormat'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSkeleton,
} from '@nazar-pryt/inctagram-ui-kit'

import { ProfilePaymentsListStyled } from './ProfilePaymentsList.styled'

export type Props = {
  payments?: GetUserPaymentsQuery['getPaymentsByUser']['items']
  sort: any
}

export const ProfilePaymentsList = ({ payments, sort }: Props) => {
  const paymentsListHeader = usePaymentsListHeader()

  return (
    <ProfilePaymentsListStyled>
      {payments && (
        <Table>
          <TableHead columns={paymentsListHeader} sort={sort} />
          <TableBody>
            {payments.map(payment => {
              return (
                <TableRow key={payment.id}>
                  <TableCell>{toLocalFormat(payment.dateOfPayment)}</TableCell>
                  <TableCell>{toLocalFormat(payment.endDate)}</TableCell>
                  <TableCell>{payment.price}</TableCell>
                  <TableCell>{payment.type}</TableCell>
                  <TableCell>{payment.paymentType}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}
    </ProfilePaymentsListStyled>
  )
}
