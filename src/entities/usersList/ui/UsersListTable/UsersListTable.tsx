import { PATH } from '@/_app/AppSettings/PATH'
import { GetUsersListQuery } from '@/entities/usersList/api/getUsers.api.types'
import { UsersListPopover } from '@/entities/usersList/ui/UsersListPopover'
import { useTranslation } from '@/shared/hooks/useTranslation'
import {
  BlockedIcon,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadColumnType,
  TableHeadSortType,
  TableRow,
  TableSkeleton,
} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

type PropsType = {
  loading: boolean
  onSort: (sort: TableHeadSortType) => void
  sort: TableHeadSortType
  userList?: GetUsersListQuery['getUsers']['users']
}

export const UsersListTable = ({ loading, onSort, sort, userList }: PropsType) => {
  const { t } = useTranslation()

  if (loading) {
    return <TableSkeleton columns={5} rows={10} />
  }

  // Todo Change UsersListTableHeader1 || UsersListTableHeader
  const UsersListTableHeader1: TableHeadColumnType[] = [
    {
      key: '',
      sortable: false,
      title: '',
    },
    {
      key: 'id',
      sortable: true,
      title: t.table.user_id,
    },
    {
      key: 'username',
      sortable: true,
      title: t.table.user_name,
    },
    {
      key: 'profile-link',
      sortable: true,
      title: t.table.profile_link,
    },
    {
      key: 'createdBy',
      sortable: true,
      title: t.table.added,
    },
    {
      key: '',
      sortable: false,
      title: '',
    },
  ]

  return (
    <Table>
      <TableHead columns={UsersListTableHeader1} onSort={onSort} sort={sort} />
      <TableBody>
        {userList &&
          userList.map(user => {
            return (
              <TableRow key={user.id}>
                <TableCell>{user.userBan && <BlockedIcon />}</TableCell>
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
