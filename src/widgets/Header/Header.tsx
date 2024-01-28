import { LangSelect } from '@/shared/components/LangSelect/LangSelect'
import { PATH } from '@/shared/constants/PATH'
import Link from 'next/link'

import { HeaderStyled } from './Header.styled'

export const Header = () => {
  return (
    <HeaderStyled>
      <Link className={'InctagramLogo'} href={PATH.LOGIN}>
        Inctagram<span>adminPage</span>
      </Link>
      <div className={'block'}>
        <LangSelect />
      </div>
    </HeaderStyled>
  )
}
