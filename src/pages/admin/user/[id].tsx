import { Profile } from '@/entities/profileInfo/ui/Profile/Profile'
import { getJustHeader } from '@/shared/layouts/Authorized/JustHeader'
import { useRouter } from 'next/router'

export default function UserIdPage() {
  const router = useRouter()
  const userId = Number(router.query.id)

  return <Profile userId={userId} />
}
UserIdPage.getLayout = getJustHeader
