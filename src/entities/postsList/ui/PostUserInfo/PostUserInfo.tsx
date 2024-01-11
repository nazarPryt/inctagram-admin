import { PostUserInfoStyled } from '@/entities/postsList/ui/PostUserInfo/PostUserInfo.styled'
import { Avatar, BlockedIcon, IconButton } from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

export const PostUserInfo = () => {
  return (
    <PostUserInfoStyled>
      <Avatar alt={'dsd'} src={'https://loremflickr.com/50/50'} userName={'na ad'} />
      <Link href={'/'}>URLProfile</Link>
      <IconButton>
        <BlockedIcon />
      </IconButton>
    </PostUserInfoStyled>
  )
}
