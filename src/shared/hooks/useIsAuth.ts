import { useEffect } from 'react'

import { PATH } from '@/shared/constants/PATH'
import { isLoggedIn } from '@/shared/constants/constants'
import { loadFromSessionStorage } from '@/shared/hooks/loadFromSessionStorage'
import { useRouter } from 'next/router'

export const useIsAuth = () => {
  const router = useRouter()
  const isAuth = loadFromSessionStorage(isLoggedIn)
  const currentPath = router.pathname

  console.log('currentPath: ', currentPath)

  useEffect(() => {
    if (currentPath.includes('admin') && isAuth) {
      return
    }
    if (currentPath.includes('admin') && !isAuth) {
      router.push(PATH.LOGIN)
    }
    if (currentPath.includes(PATH.LOGIN) && isAuth) {
      router.push(PATH.ADMIN)
    }
  }, [isAuth])

  return {
    isAuth,
  }
}
