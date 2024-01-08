import { GetUsersListQuery } from '@/entities/usersList/api/getUsers.api.types'
import { UsersListPopover } from '@/entities/usersList/ui/UsersListPopover'
import {
  BlockedIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadSortType,
  TableRow,
} from '@nazar-pryt/inctagram-ui-kit'

import { UsersListTableHeader } from './UsersListTableHeader'

type PropsType = {
  onSort: (sort: TableHeadSortType) => void
  sort: TableHeadSortType
  userList: GetUsersListQuery
}

export const UsersListTable = ({ onSort, sort, userList }: PropsType) => {
  return (
    <Table>
      <TableHead columns={UsersListTableHeader} onSort={onSort} sort={sort} />
      <TableBody>
        {userList.getUsers.users.map(user => {
          return (
            <TableRow key={user.id}>
              <TableCell>{user.userBan && <BlockedIcon />}</TableCell>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>ва</TableCell>
              <TableCell>{new Date(user.createdAt).toLocaleDateString('ru-RU')}</TableCell>
              <TableCell>
                <UsersListPopover userID={user.id} userName={user.userName} />
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
