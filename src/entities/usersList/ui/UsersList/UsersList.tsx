import { useEffect, useState } from 'react'

import { useGetUsersListQuery } from '@/entities/usersList/api/getUsers.api.types'
import { FilterBar } from '@/entities/usersList/ui/FilterBar/FilterBar'
import { UsersListTable } from '@/entities/usersList/ui/UsersListTable/UsersListTable'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { BlockStatus, SortDirection } from '@/shared/lib/ApolloClient/Schema.types'
import { Loader, Pagination } from '@nazar-pryt/inctagram-ui-kit'

import { UsersListStyled } from './UsersList.styled'

export const UsersList = () => {
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
    console.log('value', value)
  }

  useEffect(() => {
    setSearchTerm(debouncedValue)
  }, [debouncedValue])

  if (loading) {
    return <Loader />
  }
  if (data?.getUsers.users) {
    const totalPageCount = data.getUsers.pagination.pagesCount

    return (
      <UsersListStyled>
        <FilterBar
          blockedValue={blocked}
          clearSearch={handleClearSearch}
          searchValue={search}
          setBlocked={setBlocked}
          setSearch={handleSearchTerm}
        />
        <UsersListTable onSort={handleOnSort} sort={sort} userList={data} />
        <Pagination
          count={totalPageCount}
          onChange={setPageNumber}
          onPerPageChange={setPageSize}
          page={pageNumber}
          perPage={pageSize}
          perPageOptions={[10, 20, 30, 50, 100]}
        />
      </UsersListStyled>
    )
  }
}
