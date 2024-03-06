import { getAuthorizedLayout } from '@/_app/layouts/Authorized'
import { UsersList } from '@/entities/usersList/ui/UsersList'

export default function UsersListPage() {
  return <UsersList />
}
UsersListPage.getLayout = getAuthorizedLayout
