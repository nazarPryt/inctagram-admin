import { PATH } from '@/_app/AppSettings/PATH'
import { Container } from '@/shared/components/Container'
import { LangSelect } from '@/shared/components/LangSelect'
import { useTranslation } from '@/shared/hooks/useTranslation'
import Link from 'next/link'

import { HeaderStyled } from './Header.styled'

export const Header = () => {
  const { t } = useTranslation()

  return (
    <HeaderStyled>
      <Link className={'InctagramLogo'} href={PATH.LOGIN}>
        Incta<span>{t.header.admin_page}</span>
      </Link>
      <div className={'block'}>
        <LangSelect />
      </div>
    </HeaderStyled>
  )
}
