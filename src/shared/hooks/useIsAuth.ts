import { useEffect } from 'react'

import { PATH } from '@/shared/constants/PATH'
import { isLoggedIn } from '@/shared/constants/constants'
import { loadFromSessionStorage } from '@/shared/hooks/loadFromSessionStorage'
import { useRouter } from 'next/router'

export const useIsAuth = () => {
  const router = useRouter()
  const isAuth = loadFromSessionStorage(isLoggedIn)

  useEffect(() => {
    isAuth ? router.push(PATH.ADMIN) : router.push(PATH.LOGIN)
  }, [isAuth])

  return {
    isAuth,
  }
}
