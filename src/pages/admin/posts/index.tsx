import { getAuthorizedLayout } from '@/shared/layouts/Authorized/AuthorizedLayout'

export default function PostsPage() {
  return <div>Posts Page </div>
}
PostsPage.getLayout = getAuthorizedLayout
