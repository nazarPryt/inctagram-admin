import { useEffect } from 'react'

import { appSettings } from '@/_app/AppSettings'
import { PATH } from '@/_app/AppSettings/PATH'
import { loadFromSessionStorage } from '@/shared/hooks/loadFromSessionStorage'
import { useRouter } from 'next/router'

export const useIsAuth = () => {
  const router = useRouter()
  const isAuth = loadFromSessionStorage(appSettings.isLoggedIn)
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
