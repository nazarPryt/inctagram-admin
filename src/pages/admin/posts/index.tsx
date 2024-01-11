import { Posts } from '@/entities/postsList/ui/Posts/Posts'
import { getAuthorizedLayout } from '@/shared/layouts/Authorized'

export default function PostsPage() {
  return <Posts />
}
PostsPage.getLayout = getAuthorizedLayout
