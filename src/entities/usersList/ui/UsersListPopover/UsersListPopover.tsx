import { useState } from 'react'

import { PATH } from '@/_app/AppSettings/PATH'
import { GetUsersListQuery } from '@/entities/usersList/api/getUsers.api.types'
import { banOptions } from '@/features/banUser/banOptions'
import { useBanUser } from '@/features/banUser/hook/useBanUser'
import { useRemoveUser } from '@/features/removeUser/hook/useRemoveUser'
import {
  BlockedIcon,
  Dialog,
  DotsHorizontal,
  PersonRemoveIcon,
  Popover,
  PopoverItem,
  ProfileIcon,
  Select,
} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

export type UsersListPopoverType = {
  userBan: GetUsersListQuery['getUsers']['users'][number]['userBan']
  userId: number
  userName: string
}

export const UsersListPopover = ({ userBan, userId, userName }: UsersListPopoverType) => {
  const [popover, setPopover] = useState(false)

  const { handleCloseDialog, handleDeleteUser, handleOpenDialog, loading, removeDialog } =
    useRemoveUser({
      setPopover,
      userId,
      userName,
    })
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
    userId,
    userName,
  })

  return (
    <>
      <Popover icon={<DotsHorizontal />} isOpen={popover} onOpenChange={setPopover}>
        <PopoverItem icon={<PersonRemoveIcon />} name={'Delete User'} onClick={handleOpenDialog} />
        {userBan ? (
          <PopoverItem icon={<ProfileIcon />} name={'UnBun'} onClick={handleUnBan} />
        ) : (
          <PopoverItem
            icon={<BlockedIcon />}
            name={'Bun in the system'}
            onClick={handleOpenBanDialog}
          />
        )}

        <PopoverItem
          as={Link}
          href={`${PATH.USER}${userId}`}
          icon={<DotsHorizontal />}
          name={'More information'}
        />
      </Popover>
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
      <Dialog
        cancelButtonText={'No'}
        confirmButtonText={'Yes'}
        invertButtons
        onCancelButtonClick={handleCloseDialog}
        onClose={handleCloseDialog}
        onConfirmButtonClick={handleDeleteUser}
        open={removeDialog}
        title={'Delete user'}
      >
        <p>Are you sure to delete user {userName}?</p>
      </Dialog>
    </>
  )
}
