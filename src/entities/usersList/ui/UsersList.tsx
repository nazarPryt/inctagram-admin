import { useState } from 'react'

import { useGetUsersListQuery } from '@/entities/usersList/api/getUsers.api.types'
import {
  BlockedIcon,
  Loader,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@nazar-pryt/inctagram-ui-kit'

import { UsersListStyled } from './UsersList.styled'

export const UsersList = () => {
  const [page, setPage] = useState(1)
  const { data, error, loading } = useGetUsersListQuery({
    variables: {
      pageNumber: page,
      pageSize: 10,
      searchTerm: '',
      sortBy: 'desc',
    },
  })

  if (data?.getUsers.users) {
    return (
      <UsersListStyled>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell colSpan={2}>User ID</TableHeadCell>
              <TableHeadCell>Username</TableHeadCell>
              <TableHeadCell>Profile link</TableHeadCell>
              <TableHeadCell>Date added</TableHeadCell>
              <TableHeadCell></TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.getUsers.users.map(user => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{user.userBan && <BlockedIcon />}</TableCell>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.userName}</TableCell>
                  <TableCell>ва</TableCell>
                  <TableCell>{new Date(user.createdAt).toLocaleDateString('ru-RU')}</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>

        <Pagination count={data.getUsers.pagination.pagesCount} onChange={setPage} page={page} />
      </UsersListStyled>
    )
  }
}
