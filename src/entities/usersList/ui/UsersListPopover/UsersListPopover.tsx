import { useState } from 'react'
import { toast } from 'react-toastify'

import { banOptions } from '@/features/banUser/banOptions'
import { useRemoveUserMutation } from '@/features/removeUser/api/removeUser.api.types'
import { useRemoveUser } from '@/features/removeUser/hook/useRemoveUser'
import {
  BlockedIcon,
  Dialog,
  DotsHorizontal,
  PersonRemoveIcon,
  Popover,
  PopoverItem,
  Select,
} from '@nazar-pryt/inctagram-ui-kit'

export type UsersListPopoverType = { userID: number; userName: string }

export const UsersListPopover = ({ userID, userName }: UsersListPopoverType) => {
  const {
    dialog,
    handleCloseDialog,
    handleDeleteUser,
    handleOpenDialog,
    loading,
    popover,
    setPopover,
  } = useRemoveUser({ userID, userName })

  const [banReason, setBanReason] = useState('')

  const handleBunInSystem = () => {
    console.log('handleBunInSystem')
    setPopover(false)
  }
  const handleMoreInformation = () => {
    console.log('handleMoreInformation')
    setPopover(false)
  }

  return (
    <>
      <Popover icon={<DotsHorizontal />} isOpen={popover} onOpenChange={setPopover}>
        <PopoverItem icon={<PersonRemoveIcon />} name={'Delete User'} onClick={handleOpenDialog} />
        <PopoverItem
          icon={<BlockedIcon />}
          name={'Bun in the system'}
          onClick={handleBunInSystem}
        />
        <PopoverItem
          icon={<DotsHorizontal />}
          name={'More information'}
          onClick={handleMoreInformation}
        />
      </Popover>
      <Dialog
        cancelButtonText={'No'}
        confirmButtonText={'Yes'}
        invertButtons
        onCancelButtonClick={handleCloseDialog}
        onClose={handleCloseDialog}
        onConfirmButtonClick={handleDeleteUser}
        open={dialog}
        title={'Ban user'}
      >
        <p>Are you sure to ban this user, {userName}?</p>
        <Select
          onChange={setBanReason}
          options={banOptions}
          placeholder={'Reason for ban'}
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
        open={dialog}
        title={'Delete user'}
      >
        <p>Are you sure to delete user {userName}?</p>
      </Dialog>
    </>
  )
}
