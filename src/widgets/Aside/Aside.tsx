import { PATH } from '@/_app/AppSettings/PATH'
import { useLogOut } from '@/features/auth/logOut'
import { useTranslation } from '@/shared/hooks/useTranslation'
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
  const { handleOpenLogoutDialog, renderLogoutDialog } = useLogOut()
  const { pathname } = useRouter()
  const { t } = useTranslation()

  return (
    <AsideStyled>
      <nav>
        <NavLink
          href={PATH.USERS}
          icon={<ProfileIcon />}
          name={t.aside.users_list}
          pathname={pathname}
        />
        <NavLink
          href={PATH.STATISTICS}
          icon={<StatisticsIcon />}
          name={t.aside.statistics}
          pathname={pathname}
        />
        <NavLink
          href={PATH.PAYMENTS}
          icon={<PaymentIcon />}
          name={t.aside.payments_list}
          pathname={pathname}
        />
        <NavLink
          href={PATH.POSTS}
          icon={<PostsIcon />}
          name={t.aside.posts_list}
          pathname={pathname}
        />
        <NavButton icon={<LogOutIcon />} onClick={handleOpenLogoutDialog} title={t.aside.logout} />
      </nav>
      {renderLogoutDialog()}
    </AsideStyled>
  )
}
