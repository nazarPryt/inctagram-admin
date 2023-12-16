import { UsersList } from '@/entities/usersList/ui/UsersList'
import { getAuthorizedLayout } from '@/shared/layouts/Authorized/AuthorizedLayout'

export default function UsersListPage() {
  return (
    <div>
      <UsersList />
    </div>
  )
}
UsersListPage.getLayout = getAuthorizedLayout
