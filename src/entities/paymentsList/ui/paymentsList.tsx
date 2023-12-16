import { useGetListPaymentsQuery } from '../api/getPayments.api.types'
import { PaymentsListStyled } from './paymentsList.styled'

export const PaymentsList = () => {
  const { data, error, loading } = useGetListPaymentsQuery({
    variables: {
      pageNumber: 1,
      pageSize: 10,
      searchTerm: '',
      sortBy: 'createdAt',
      sortDirection: 'desc',
    },
  })

  console.log('data: ', data)
  if (loading) {
    return 'Loading...'
  }
  if (error) {
    return `Error! ${error.message}`
  }

  return <PaymentsListStyled>dfd</PaymentsListStyled>
}
