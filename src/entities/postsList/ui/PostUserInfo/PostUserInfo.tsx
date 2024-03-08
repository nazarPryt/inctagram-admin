import { PATH } from '@/_app/AppSettings/PATH'
import { useGetProfileInfoQuery } from '@/entities/profileInfo/api/getProfileInfo/getProfileInfo.api.types'
import { useBanUser } from '@/features/banUser/hook/useBanUser'
import { useUnBunUser } from '@/features/unBunUser/hook/useUnBunUser'
import { Avatar, BlockedIcon, IconButton, ProfileIcon } from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import { PostUserInfoStyled } from './PostUserInfo.styled'

type PostUserInfoPropsType = {
  userID: number
}
export const PostUserInfo = ({ userID }: PostUserInfoPropsType) => {
  const { data: user } = useGetProfileInfoQuery({
    variables: {
      userID,
    },
  })

  const userName = user?.getUser.userName || ''

  const { handleOpenBanDialog, renderBanUserDialog } = useBanUser({
    userId: userID,
    userName,
  })
  const { handleOpenUnBanDialog, renderUnBanUserDialog } = useUnBunUser({
    userId: userID,
    userName,
  })

  if (user && user.getUser) {
    const avatar = user.getUser.profile.avatars?.length
      ? user.getUser.profile.avatars[0].url || ''
      : ''
    const userName = user.getUser.userName

    return (
      <PostUserInfoStyled>
        <Avatar alt={userName} src={avatar} userName={userName} />
        <Link href={`${PATH.USER}${userID}`}>{userName}</Link>

        {user.getUser.userBan?.reason ? (
          <IconButton onClick={handleOpenUnBanDialog}>
            <ProfileIcon />
          </IconButton>
        ) : (
          <IconButton onClick={handleOpenBanDialog}>
            <BlockedIcon />
          </IconButton>
        )}
        {renderUnBanUserDialog()}
        {renderBanUserDialog()}
      </PostUserInfoStyled>
    )
  }

  return null
}
