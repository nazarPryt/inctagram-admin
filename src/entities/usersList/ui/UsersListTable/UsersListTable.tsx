import {
  GetUsersListQuery,
  GetUsersListQueryHookResult,
  GetUsersListQueryResult,
} from '@/entities/usersList/api/getUsers.api.types'
import {
  BlockedIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@nazar-pryt/inctagram-ui-kit'

type PropsType = {
  userList: GetUsersListQuery
}
export const UsersListTable = ({ userList }: PropsType) => {
  return (
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
        {userList.getUsers.users.map(user => {
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
  )
}
