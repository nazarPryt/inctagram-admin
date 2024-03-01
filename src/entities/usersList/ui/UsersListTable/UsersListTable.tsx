import { GetUsersListQuery } from '@/entities/usersList/api/getUsers.api.types'
import { UsersListPopover } from '@/entities/usersList/ui/UsersListPopover'
import { PATH } from '@/shared/constants/PATH'
import {
  BlockedIcon,
  NavLink,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadSortType,
  TableRow,
  TableSkeleton,
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
    return <TableSkeleton columns={5} rows={10} />
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
                <TableCell>
                  <NavLink
                    href={`${PATH.USER_PROFILE}/${user.id}`}
                    icon={''}
                    name={`${user.userName}`}
                    pathname={`${user.userName}`}
                  />
                </TableCell>
                <TableCell>{new Date(user.createdAt).toLocaleDateString('ru-RU')}</TableCell>
                <TableCell>
                  <UsersListPopover
                    userBan={user.userBan?.reason ? user.userBan : null}
                    userId={user.id}
                    userName={user.userName}
                  />
                </TableCell>
              </TableRow>
            )
          })}
      </TableBody>
    </Table>
  )
}
