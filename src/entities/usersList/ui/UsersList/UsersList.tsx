import { useUsersList } from '@/entities/usersList/hook/useUsersList'
import { FilterBar } from '@/entities/usersList/ui/FilterBar/FilterBar'
import { MobileUsersListTable } from '@/entities/usersList/ui/MobileUsersListTable'
import { UsersListTable } from '@/entities/usersList/ui/UsersListTable/UsersListTable'
import { useScreenDetector } from '@/shared/hooks/useAdaptive'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { Pagination, TableSkeleton } from '@nazar-pryt/inctagram-ui-kit'

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

  const { t } = useTranslation()
  const { isMobile } = useScreenDetector()

  if (loading) {
    return isMobile ? (
      <TableSkeleton columns={1} rows={4} />
    ) : (
      <TableSkeleton columns={4} rows={10} />
    )
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
      {isMobile && <MobileUsersListTable loading={loading} userList={data?.getUsers.users} />}
      {!isMobile && (
        <UsersListTable
          loading={loading}
          onSort={handleOnSort}
          sort={sort}
          userList={data?.getUsers.users}
        />
      )}
      <Pagination
        count={totalPageCount}
        onChange={setPageNumber}
        onPage={t.pagination.on_page}
        onPerPageChange={setPageSize}
        page={pageNumber}
        perPage={pageSize}
        perPageOptions={[10, 20, 30, 50, 100]}
        show={t.pagination.show}
      />
    </UsersListStyled>
  )
}
