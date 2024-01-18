import { useUsersList } from '@/entities/usersList/hook/useUsersList'
import { FilterBar } from '@/entities/usersList/ui/FilterBar/FilterBar'
import { UsersListTable } from '@/entities/usersList/ui/UsersListTable/UsersListTable'
import { Pagination } from '@nazar-pryt/inctagram-ui-kit'

import { UsersListStyled } from './UsersList.styled'

export const UsersList = () => {
  const {
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
  } = useUsersList()

  return (
    <UsersListStyled>
      <FilterBar
        blockedValue={blocked}
        clearSearch={handleClearSearch}
        searchValue={search}
        setBlocked={setBlocked}
        setSearch={handleSearchTerm}
      />
      <UsersListTable
        loading={loading}
        onSort={handleOnSort}
        sort={sort}
        userList={data?.getUsers.users}
      />
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
