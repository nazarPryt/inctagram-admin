import { getAuthorizedLayout } from '@/_app/layouts/Authorized'
import { Posts } from '@/entities/postsList/ui/Posts'

export default function PostsPage() {
  return <Posts />
}
PostsPage.getLayout = getAuthorizedLayout
