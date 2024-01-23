import { useState } from 'react'

import { useGetAllPaymentsQuery } from '@/entities/paymentsList/api/getAllPayments.api.types'
import { SortDirection } from '@/shared/lib/ApolloClient/Schema.types'

export const useGetAllPayments = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [sort, setOnSort] = useState<{ direction: SortDirection; key: string }>({
    direction: SortDirection.Asc,
    key: 'id',
  })

  const { data, loading } = useGetAllPaymentsQuery({
    variables: {
      pageNumber,
      pageSize,
      sortBy: sort.key,
      sortDirection: sort.direction,
    },
  })

  const handleOnSort = (value: any) => {
    if (!value) {
      setOnSort({
        direction: SortDirection.Asc,
        key: 'id',
      })
    } else {
      setOnSort(value)
    }
  }

  const totalPageCount = data ? data.getAllPayments.pagesCount : 1

  return {
    data,
    handleOnSort,
    loading,
    pageNumber,
    pageSize,
    setPageNumber,
    setPageSize,
    sort,
    totalPageCount,
  }
}
