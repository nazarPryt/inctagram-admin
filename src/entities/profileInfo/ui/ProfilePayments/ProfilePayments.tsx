import { useProfilePayments } from '@/entities/profileInfo/hook/useProfilePayments'
import { IsEmpty } from '@/shared/components/IsEmpty'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSkeleton,
} from '@nazar-pryt/inctagram-ui-kit'

import { ProfilePaymentsStyled } from './ProfilePayments.styled'
import { PaymentsListHeader } from './ProfilePaymentsHeader'

export const ProfilePayments = ({ userID }: { userID: number }) => {
  const { data, loading, pageNumber, pagesize, setOnSort, setPageNumber, setPageSize, sort } =
    useProfilePayments({ userID })

  if (loading) {
    return <TableSkeleton columns={5} rows={5} />
  }
  if (data?.getListPaymentsById.items.length) {
    return (
      <ProfilePaymentsStyled>
        <Table>
          <TableHead columns={PaymentsListHeader} sort={sort} />
          <TableBody>
            {data?.getListPaymentsById.items.map(payment => {
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

  return <IsEmpty text={'User doesnt have any payments yet'} />
}
