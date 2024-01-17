import Image from 'next/image'

import { IsEmptyStyled } from './IsEmpty.styled'
import emptyFolder from './icon/emptyfolder.png'

export const IsEmpty = () => {
  return (
    <IsEmptyStyled>
      <div>
        <h1>Payments list is empty</h1>
        <Image alt={'emptyFolder'} height={300} src={emptyFolder} width={300} />
      </div>
    </IsEmptyStyled>
  )
}
