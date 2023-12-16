import { PATH } from '@/shared/constants/PATH'
import { useLogOut } from '@/shared/hooks/useLogOut'
import {
  MyProfileIcon,
  NavButton,
  NavLink,
  PaymentIcon,
  PostsIcon,
  StatisticsIcon,
} from '@nazar-pryt/inctagram-ui-kit'

import { AsideStyled } from './Aside.styled'

export const Aside = () => {
  const { HandleLogOut } = useLogOut()

  return (
    <AsideStyled>
      <nav>
        <NavLink href={PATH.USERS} icon={<MyProfileIcon />} name={'Users list'} />
        <NavLink href={PATH.STATISTICS} icon={<StatisticsIcon />} name={'Statistics'} />
        <NavLink href={PATH.PAYMENTS} icon={<PaymentIcon />} name={'Payments list'} />
        <NavLink href={PATH.POSTS} icon={<PostsIcon />} name={'Posts list'} />
        <NavButton icon={<PaymentIcon />} onClick={HandleLogOut} title={'Log out'} />
      </nav>
    </AsideStyled>
  )
}
