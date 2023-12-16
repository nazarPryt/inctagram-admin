import { UsersList } from '@/entities/usersList/ui/UsersList'
import { getAuthorizedLayout } from '@/shared/layouts/Authorized'

export default function UsersListPage() {
  return <UsersList />
}
UsersListPage.getLayout = getAuthorizedLayout
