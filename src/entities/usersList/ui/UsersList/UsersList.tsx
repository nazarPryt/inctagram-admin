import { useState } from 'react'

import { useGetUsersListQuery } from '@/entities/usersList/api/getUsers.api.types'
import { FilterBar } from '@/entities/usersList/ui/FilterBar/FilterBar'
import { UsersListTable } from '@/entities/usersList/ui/UsersListTable/UsersListTable'
import { Pagination } from '@nazar-pryt/inctagram-ui-kit'

import { UsersListStyled } from './UsersList.styled'

export const UsersList = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const { data } = useGetUsersListQuery({
    variables: {
      pageNumber: page,
      pageSize: 10,
      searchTerm: search,
      sortBy: 'desc',
    },
  })

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
          clearSearch={handleClearSearch}
          searchValue={search}
          setSearch={handleSearchTerm}
        />
        <UsersListTable userList={data} />
        <Pagination count={totalPageCount} onChange={setPage} page={page} />
      </UsersListStyled>
    )
  }
}
