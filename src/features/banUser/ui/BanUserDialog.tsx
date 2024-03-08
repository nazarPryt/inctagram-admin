import { Dialog, Select } from '@nazar-pryt/inctagram-ui-kit'

import { banOptions } from '../banOptions'

type BanUserDialogType = {
  banDialog: boolean
  banReason: string
  handleBanUser: () => void
  handleCloseBanDialog: () => void
  loading: boolean
  setBanReason: (value: string) => void
  userName: string
}
export const BanUserDialog = ({
  banDialog,
  banReason,
  handleBanUser,
  handleCloseBanDialog,
  loading,
  setBanReason,
  userName,
}: BanUserDialogType) => {
  return (
    <Dialog
      cancelButtonText={'No'}
      confirmButtonText={'Yes'}
      disabled={loading}
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
