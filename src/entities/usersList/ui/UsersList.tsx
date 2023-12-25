import { useGetUsersListQuery } from '@/entities/usersList/api/getUsers.api.types'
import {
  BlockedIcon,
  Loader,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@nazar-pryt/inctagram-ui-kit'

import { UsersListStyled } from './UsersList.styled'

export const UsersList = () => {
  const { data, error, loading } = useGetUsersListQuery({
    variables: {
      pageNumber: 1,
      pageSize: 10,
      searchTerm: '',
      sortBy: 'desc',
      // sortDirection: 'desc',
    },
  })

  console.log('data: ', data)
  if (loading) {
    return <Loader />
  }
  if (error) {
    return `Error! ${error.message}`
  }

  return (
    <UsersListStyled>
      <TableHead>
        <TableRow>
          <TableHeadCell colSpan={2}>User ID</TableHeadCell>
          <TableHeadCell>Username</TableHeadCell>
          <TableHeadCell>Profile kink</TableHeadCell>
          <TableHeadCell>Date added</TableHeadCell>
          <TableHeadCell></TableHeadCell>
        </TableRow>
      </TableHead>

      <TableBody>
        <TableRow>
          <TableCell>{<BlockedIcon />}</TableCell>
          <TableCell>User ID</TableCell>
          <TableCell>ва</TableCell>
          <TableCell>ва</TableCell>
          <TableCell>ва</TableCell>
          <TableCell>...</TableCell>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>User ID</TableCell>
          <TableCell>ва</TableCell>
          <TableCell>ва</TableCell>
          <TableCell>ва</TableCell>
          <TableCell>...</TableCell>
        </TableRow>
      </TableBody>
    </UsersListStyled>
  )
}
