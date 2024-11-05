import { PATH } from '@/_app/AppSettings'
import { GetUsersListQuery } from '@/entities/usersList/api/getUsers.api.types'
import { UsersListPopover } from '@/entities/usersList/ui/UsersListPopover'
import { IsEmpty } from '@/shared/components/IsEmpty'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { toLocalFormat } from '@/shared/utils/toLocalFormat'
import { BlockedIcon, Button, TableSkeleton } from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import { MobileUsersListTableStyled } from './MobileUsersListTable.styled'

export type Props = {
  loading: boolean
  userList?: GetUsersListQuery['getUsers']['users']
}

export const MobileUsersListTable = ({ loading, userList }: Props) => {
  const { t } = useTranslation()

  if (loading) {
    return <TableSkeleton columns={1} rows={4} />
  }
  if (!userList) {
    return <IsEmpty text={t.table.payments_list_empty} />
  }

  return (
    <MobileUsersListTableStyled>
      {userList.map(user => (
        <table key={user.id}>
          <thead>
            <tr>
              <th>{t.table.user_id}</th>
            </tr>
            <tr>
              <th>{t.table.user_name}</th>
            </tr>
            <tr>
              <th>{t.table.profile_link}</th>
            </tr>
            <tr>
              <th>{t.table.added}</th>
            </tr>
            <tr>
              <th>{t.table.user_details}</th>
            </tr>
            {user.userBan && (
              <tr>
                <th>{t.table.user_is_blocked}</th>
              </tr>
            )}
          </thead>

          <tbody>
            <tr>
              <td>{user.id}</td>
            </tr>
            <tr>
              <td>{user.userName}</td>
            </tr>
            <tr>
              <td>
                <Button asT={Link} href={`${PATH.USER}${user.id}`} variant={'text'}>
                  {user.userName}
                </Button>
              </td>
            </tr>
            <tr>
              <td>{toLocalFormat(user.createdAt)}</td>
            </tr>
            <tr>
              <td>
                <UsersListPopover
                  userBan={user.userBan}
                  userId={user.id}
                  userName={user.userName}
                />
              </td>
            </tr>
            {user.userBan && (
              <tr>
                <td>
                  <BlockedIcon />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      ))}
    </MobileUsersListTableStyled>
  )
}
