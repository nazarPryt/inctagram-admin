import { PATH } from '@/_app/AppSettings/PATH'
import { useLogOut } from '@/features/auth/logOut'
import {
  LogOutIcon,
  NavButton,
  NavLink,
  PaymentIcon,
  PostsIcon,
  ProfileIcon,
  StatisticsIcon,
} from '@nazar-pryt/inctagram-ui-kit'
import { useRouter } from 'next/router'

import { AsideStyled } from './Aside.styled'

export const Aside = () => {
  const { HandleLogOut } = useLogOut()
  const { pathname } = useRouter()

  return (
    <AsideStyled>
      <nav>
        <NavLink href={PATH.USERS} icon={<ProfileIcon />} name={'Users list'} pathname={pathname} />
        <NavLink
          href={PATH.STATISTICS}
          icon={<StatisticsIcon />}
          name={'Statistics'}
          pathname={pathname}
        />
        <NavLink
          href={PATH.PAYMENTS}
          icon={<PaymentIcon />}
          name={'Payments list'}
          pathname={pathname}
        />
        <NavLink href={PATH.POSTS} icon={<PostsIcon />} name={'Posts list'} pathname={pathname} />
        <NavButton icon={<LogOutIcon />} onClick={HandleLogOut} title={'Log out'} />
      </nav>
    </AsideStyled>
  )
}
