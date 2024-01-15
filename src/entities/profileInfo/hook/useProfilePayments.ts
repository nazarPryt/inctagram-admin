import { useState } from 'react'

import { useGetListPaymentsQuery } from '@/entities/paymentsList/api/getPayments.api.types'
import { SortDirection } from '@/shared/lib/ApolloClient/Schema.types'

export const useProfilePayments = ({ userID }: { userID: number }) => {
  const [pageNumber, setPageNumber] = useState(1)
  const [pagesize, setPageSize] = useState(10)

  const [sort, setOnSort] = useState<{ direction: SortDirection; key: string }>({
    direction: SortDirection.Asc,
    key: 'id',
  })
  const { data, error, loading } = useGetListPaymentsQuery({
    variables: {
      pageNumber,
      pagesize,
      sortBy: sort.key,
      sortDirection: sort.direction,
      userID,
    },
  })

  return { data, loading, pageNumber, pagesize, setOnSort, setPageNumber, setPageSize, sort }
}
