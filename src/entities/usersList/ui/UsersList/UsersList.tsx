import { useEffect, useState } from 'react'

import { useGetUsersListQuery } from '@/entities/usersList/api/getUsers.api.types'
import { FilterBar } from '@/entities/usersList/ui/FilterBar/FilterBar'
import { UsersListTable } from '@/entities/usersList/ui/UsersListTable/UsersListTable'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { BlockStatus, SortDirection } from '@/shared/lib/ApolloClient/Schema.types'
import { Pagination } from '@nazar-pryt/inctagram-ui-kit'

import { UsersListStyled } from './UsersList.styled'

export const UsersList = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState('') //search current input value
  const [searchTerm, setSearchTerm] = useState('') //search debounced value
  const [blocked, setBlocked] = useState('active')

  const blockStatus = blocked === 'active' ? undefined : BlockStatus.Blocked

  const { data } = useGetUsersListQuery({
    variables: {
      blockStatus,
      pageNumber,
      pageSize: 10,
      searchTerm,
      sortBy: 'desc',
      sortDirection: SortDirection.Asc,
    },
  })
  const debouncedValue = useDebounce<string>(search, 800)

  useEffect(() => {
    setSearchTerm(debouncedValue)
  }, [debouncedValue])

  if (data?.getUsers.users) {
    const totalPageCount = data.getUsers.pagination.pagesCount

    const handleSearchTerm = (value: string) => {
      setSearch(value)
    }
    const handleClearSearch = () => {
      setSearch('')
    }

    return (
      <UsersListStyled>
        <FilterBar
          blockedValue={blocked}
          clearSearch={handleClearSearch}
          searchValue={search}
          setBlocked={setBlocked}
          setSearch={handleSearchTerm}
        />
        <UsersListTable userList={data} />
        <Pagination count={totalPageCount} onChange={setPageNumber} page={pageNumber} />
      </UsersListStyled>
    )
  }
}
