import { useEffect } from 'react'

import { PATH } from '@/shared/constants/PATH'
import { isLoggedIn } from '@/shared/constants/constants'
import { loadFromSessionStorage } from '@/shared/hooks/loadFromSessionStorage'
import { useRouter } from 'next/router'

export const useIsAuth = () => {
  const router = useRouter()
  const isAuth = loadFromSessionStorage(isLoggedIn)
  const currentPath = router.pathname

  useEffect(() => {
    if (currentPath.includes('admin') && isAuth) {
      return
    }
    if (currentPath.includes('admin') && !isAuth) {
      router.push(PATH.LOGIN)
    }
    if (currentPath.includes('/') && !isAuth) {
      router.push(PATH.LOGIN)
    }
    if (currentPath.includes('/') && isAuth) {
      router.push(PATH.USERS)
    }
    if (currentPath.includes(PATH.LOGIN) && isAuth) {
      router.push(PATH.USERS)
    }
  }, [isAuth])

  return {
    isAuth,
  }
}
