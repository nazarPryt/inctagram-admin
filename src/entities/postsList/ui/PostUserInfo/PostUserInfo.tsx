import { useState } from 'react'

import { PostUserInfoStyled } from '@/entities/postsList/ui/PostUserInfo/PostUserInfo.styled'
import { useGetProfileInfoQuery } from '@/entities/profileInfo/api/getProfileInfo/getProfileInfo.api.types'
import { banOptions } from '@/features/banUser/banOptions'
import { useBanUser } from '@/features/banUser/hook/useBanUser'
import { PATH } from '@/shared/constants/PATH'
import {
  Avatar,
  BlockedIcon,
  Dialog,
  IconButton,
  ProfileIcon,
  Select,
} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

type PostUserInfoPropsType = {
  userID: number
}
export const PostUserInfo = ({ userID }: PostUserInfoPropsType) => {
  const [show, setShow] = useState(false)
  const { data: user } = useGetProfileInfoQuery({
    variables: {
      userID,
    },
  })

  const [_popover, setPopover] = useState(false)
  const userName = user?.getUser.userName || ''
  const userIDid = user?.getUser.id || 1
  const {
    banDialog,
    banReason,
    handleBanUser,
    handleCloseBanDialog,
    handleOpenBanDialog,
    handleUnBan,
    setBanReason,
  } = useBanUser({
    setPopover,
    userId: userIDid,
    userName,
  })

  // Todo 'https://loremflickr.com/50/50'  replace with  icon.svg
  const avatar = user?.getUser.profile.avatars?.length
    ? user.getUser.profile.avatars[0].url || 'https://loremflickr.com/50/50'
    : 'https://loremflickr.com/50/50'

  const handleUnBanClick = () => {
    user?.getUser?.userBan?.reason ? handleUnBan() : handleOpenBanDialog()
  }
  const handleMouseMove = () => setShow(true)
  const handleMouseOut = () => setShow(false)

  return (
    <PostUserInfoStyled>
      <Avatar alt={'dsd'} src={avatar} userName={user?.getUser.profile.userName || 'na ad'} />
      <Link href={`${PATH.USER}${userID}`}>{user?.getUser.profile.userName}</Link>
      <IconButton
        onClick={handleUnBanClick}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
      >
        {user?.getUser?.userBan?.reason ? (
          // Todo implement in UI-KIT
          <>
            <div style={{ color: 'white' }}>
              <ProfileIcon />
              {show && 'unBun'}
            </div>
          </>
        ) : (
          <>
            <div style={{ color: 'white' }}>
              <BlockedIcon />
              {show && 'Bun'}
            </div>
          </>
        )}
      </IconButton>
      {/*Todo must be used component BanUserDialog.tsx*/}
      <Dialog
        cancelButtonText={'No'}
        confirmButtonText={'Yes'}
        invertButtons
        onCancelButtonClick={handleCloseBanDialog}
        onClose={handleCloseBanDialog}
        onConfirmButtonClick={handleBanUser}
        open={banDialog}
        title={'Ban user'}
      >
        <p>Are you sure to ban this user, {userName}?</p>
        <Select
          onChange={setBanReason}
          options={banOptions}
          placeholder={'Reason for ban'}
          portal={false}
          value={banReason}
        />
      </Dialog>
    </PostUserInfoStyled>
  )
}
