import { PATH } from '@/_app/AppSettings/PATH'
import { GetUsersListQuery } from '@/entities/usersList/api/getUsers.api.types'
import { UsersListPopover } from '@/entities/usersList/ui/UsersListPopover'
import { IsEmpty } from '@/shared/components/IsEmpty'
import { useTranslation } from '@/shared/hooks/useTranslation'
import {
  BlockedIcon,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadSortType,
  TableRow,
  TableSkeleton,
} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import { useUsersListTableHeader } from '../../hook/useUsersListTableHeader'

type PropsType = {
  loading: boolean
  onSort: (sort: TableHeadSortType) => void
  sort: TableHeadSortType
  userList?: GetUsersListQuery['getUsers']['users']
}

export const UsersListTable = ({ loading, onSort, sort, userList }: PropsType) => {
  const { t } = useTranslation()
  const usersListTableHeader = useUsersListTableHeader()

  if (!userList) {
    return <IsEmpty text={t.table.payments_list_empty} /> //todo
  }
  if (loading) {
    return <TableSkeleton columns={5} rows={10} />
  }

  return (
    <Table>
      <TableHead columns={usersListTableHeader} onSort={onSort} sort={sort} />
      <TableBody>
        {userList &&
          userList.map(user => {
            return (
              <TableRow key={user.id}>
                {/* Todo Change:  need to do fix into TableCell - style={{ padding: 0 }} */}
                <TableCell style={{ padding: 0 }}>{user.userBan && <BlockedIcon />}</TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>
                  <Button asT={Link} href={`${PATH.USER}${user.id}`} variant={'text'}>
                    {user.userName}
                  </Button>
                </TableCell>
                <TableCell>{new Date(user.createdAt).toLocaleDateString('ru-RU')}</TableCell>
                <TableCell>
                  <UsersListPopover
                    userBan={user.userBan}
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
