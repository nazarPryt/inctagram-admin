import { useGetListPaymentsQuery } from '@/entities/paymentsList/api/getPayments.api.types'
import { PaymentsListTable } from '@/entities/paymentsList/ui/PaymentsListTable/PaymentsListTable'
import { useGetProfileInfoQuery } from '@/entities/profileInfo/api/getProfileInfo.api.types'

import { PaymentsListStyled } from './PaymentsList.styled'

export const PaymentsList = () => {
  // const { data, loading, error } = useGetProfileInfoQuery({
  //   variables: {
  //     userID: // value for 'userID'
  //   },
  // });
  // const { data, error, loading } = useGetListPaymentsQuery({
  //   variables: {
  //     pageNumber: 1,
  //     pagesize: 10,
  //     sortBy: 'createdAt',
  //     // sortDirection: 'desc',
  //     userID: 1,
  //   },
  // })

  return (
    <PaymentsListStyled>
      <PaymentsListTable />
    </PaymentsListStyled>
  )
}
