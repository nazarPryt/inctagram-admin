import { useRouter } from 'next/router'

export const useLogOut = () => {
  const router = useRouter()
  const HandleLogOut = () => {
    sessionStorage.clear()
    localStorage.clear()
    router.reload()
  }

  return {
    HandleLogOut,
  }
}
