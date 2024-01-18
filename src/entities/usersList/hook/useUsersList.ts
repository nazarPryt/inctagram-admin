import { useEffect, useState } from 'react'

import { useGetUsersListQuery } from '@/entities/usersList/api/getUsers.api.types'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { BlockStatus, SortDirection } from '@/shared/lib/ApolloClient/Schema.types'

export const useUsersList = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [search, setSearch] = useState('') //search current input value
  const [searchTerm, setSearchTerm] = useState('') //search debounced value
  const [blocked, setBlocked] = useState('active')
  const [sort, setOnSort] = useState<{ direction: SortDirection; key: string }>({
    direction: SortDirection.Asc,
    key: 'id',
  })

  const blockStatus = blocked === 'active' ? undefined : BlockStatus.Blocked

  const { data, loading } = useGetUsersListQuery({
    variables: {
      blockStatus,
      pageNumber,
      pageSize,
      searchTerm,
      sortBy: sort.key,
      sortDirection: sort.direction,
    },
  })
  const debouncedValue = useDebounce<string>(search, 800)

  const handleSearchTerm = (value: string) => {
    setSearch(value)
  }

  const handleClearSearch = () => {
    setSearch('')
    setSearchTerm('')
  }
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

  useEffect(() => {
    setSearchTerm(debouncedValue)
  }, [debouncedValue])
  const totalPageCount = data ? data.getUsers.pagination.pagesCount : 1

  return {
    blocked,
    data,
    handleClearSearch,
    handleOnSort,
    handleSearchTerm,
    loading,
    pageNumber,
    pageSize,
    search,
    setBlocked,
    setPageNumber,
    setPageSize,

    sort,
    totalPageCount,
  }
}
