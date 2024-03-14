import { getJustHeader } from '@/_app/layouts/Authorized/JustHeader'
import { Profile } from '@/entities/profileInfo/ui/Profile/Profile'
import { useRouter } from 'next/router'

export default function UserIdPage() {
  const router = useRouter()
  const userId = Number(router.query.id)

  return <Profile userId={userId} />
}
UserIdPage.getLayout = getJustHeader
