import { getUnAuthorizedLayout } from '@/_app/layouts/UnAuthorized'
import { useIsAuth } from '@/shared/hooks/useIsAuth'
import { Loader } from '@nazar-pryt/inctagram-ui-kit'

export default function HomePage() {
  const {} = useIsAuth()

  return <Loader />
}
HomePage.getLayout = getUnAuthorizedLayout
