import { useState } from 'react'

import { banOptions } from '@/features/banUser/banOptions'
import { useBanUser } from '@/features/banUser/hook/useBanUser'
import { Dialog, Select } from '@nazar-pryt/inctagram-ui-kit'

type BanUserDialogType = {
  handleOpen: (value: boolean) => void
  userId: number
  userName: string
}
export const BanUserDialog = ({ handleOpen, userId, userName }: BanUserDialogType) => {
  const [_popover, setPopover] = useState(false)

  const {
    banDialog,
    banReason,
    handleBanUser,
    handleCloseBanDialog,
    handleOpenBanDialog,
    setBanReason,
  } = useBanUser({
    setPopover,
    userId,
    userName,
  })

  return (
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
  )
}
