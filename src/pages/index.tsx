import { useIsAuth } from '@/shared/hooks/useIsAuth'
import { getUnAuthorizedLayout } from '@/shared/layouts/UnAuthorized/UnAuthorizedLayout'
import { Loader } from '@nazar-pryt/inctagram-ui-kit'

export default function HomePage() {
  const {} = useIsAuth()

  return <Loader />
}
HomePage.getLayout = getUnAuthorizedLayout
