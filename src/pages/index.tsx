import { useIsAuth } from '@/shared/hooks/useIsAuth'
import { Loader } from '@nazar-pryt/inctagram-ui-kit'

export default function Home() {
  const {} = useIsAuth()

  return <Loader />
}
