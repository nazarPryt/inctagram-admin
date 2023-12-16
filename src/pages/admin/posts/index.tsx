import { getAuthorizedLayout } from '@/shared/layouts/Authorized'

export default function PostsPage() {
  return <div>Posts Page </div>
}
PostsPage.getLayout = getAuthorizedLayout
