import { useGetListPaymentsQuery } from '../api/getPayments.api.types'
import { PaymentsListStyled } from './paymentsList.styled'

export const PaymentsList = () => {
  const { data, error, loading } = useGetListPaymentsQuery({
    variables: {
      pageNumber: 1,
      pagesize: 10,
      sortBy: 'createdAt',
      // sortDirection: 'desc',
      userID: 1,
    },
  })

  if (loading) {
    return 'Loading...'
  }
  if (error) {
    return `Error! ${error.message}`
  }

  return <PaymentsListStyled>dfd</PaymentsListStyled>
}
