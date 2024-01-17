import { GetUsersListQuery } from '@/entities/usersList/api/getUsers.api.types'
import { UsersListPopover } from '@/entities/usersList/ui/UsersListPopover'
import { TableSkeleton } from '@/shared/components/TableSkeleton/TableSkeleton'
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
  loading: boolean
  onSort: (sort: TableHeadSortType) => void
  sort: TableHeadSortType
  userList?: GetUsersListQuery['getUsers']['users']
}

export const UsersListTable = ({ loading, onSort, sort, userList }: PropsType) => {
  if (loading) {
    return <TableSkeleton />
  }

  return (
    <Table>
      <TableHead columns={UsersListTableHeader} onSort={onSort} sort={sort} />
      <TableBody>
        {userList &&
          userList.map(user => {
            return (
              <TableRow key={user.id}>
                <TableCell>{user.userBan && <BlockedIcon />}</TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>ва</TableCell>
                <TableCell>{new Date(user.createdAt).toLocaleDateString('ru-RU')}</TableCell>
                <TableCell>
                  <UsersListPopover userId={user.id} userName={user.userName} />
                </TableCell>
              </TableRow>
            )
          })}
      </TableBody>
    </Table>
  )
}
