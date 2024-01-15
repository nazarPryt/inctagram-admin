import { useProfilePayments } from '@/entities/profileInfo/hook/useProfilePayments'
import { ProfilePaymentsStyled } from '@/entities/profileInfo/ui/ProfilePayments/ProfilePayments.styled'
import { PaymentsListHeader } from '@/entities/profileInfo/ui/ProfilePayments/ProfilePaymentsHeader'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@nazar-pryt/inctagram-ui-kit'

export const ProfilePayments = ({ userID }: { userID: number }) => {
  const { data, loading, pageNumber, pagesize, setOnSort, setPageNumber, setPageSize, sort } =
    useProfilePayments({ userID })

  return (
    <ProfilePaymentsStyled>
      <Table>
        <TableHead columns={PaymentsListHeader} sort={sort} />
        <TableBody>
          {data?.getListPayments.items.map(payment => {
            return (
              <TableRow key={payment.id}>
                <TableCell>{new Date(payment.dateOfPayment).toLocaleDateString('ru-RU')}</TableCell>
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
