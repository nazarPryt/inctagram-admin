import { LangSelect } from '@/shared/components/LangSelect/LangSelect'
import { PATH } from '@/shared/constants/PATH'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import { HeaderStyled } from './Header.styled'

export const Header = () => {
  const { t } = useTranslation()

  return (
    <HeaderStyled>
      <Link className={'InctagramLogo'} href={PATH.LOGIN}>
        Inctagram<span>{t('header.admin_page')}</span>
      </Link>
      <div className={'block'}>
        <LangSelect />
      </div>
    </HeaderStyled>
  )
}
