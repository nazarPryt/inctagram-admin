import { getAuthorizedLayout } from '@/shared/layouts/Authorized/AuthorizedLayout'

export default function AdminPage() {
  return <div>protected admin page </div>
}
AdminPage.getLayout = getAuthorizedLayout
