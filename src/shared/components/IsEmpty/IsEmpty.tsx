import Image from 'next/image'

import emptyFolder from '../../../../public/assets/emptyfolder.png'
import { IsEmptyStyled } from './IsEmpty.styled'

type IsEmptyType = {
  text: string
}

export const IsEmpty = ({ text }: IsEmptyType) => {
  return (
    <IsEmptyStyled>
      <div>
        <h1>{text}</h1>
        <Image alt={'emptyFolder'} height={300} src={emptyFolder} width={300} />
      </div>
    </IsEmptyStyled>
  )
}
