import { Dialog } from '@nazar-pryt/inctagram-ui-kit'

type PropsType = {
  handleCloseUnBanDialog: () => void
  handleUnBanUser: () => void
  isUnBanDialogOpen: boolean
  loading: boolean
  userName: string
}
export const UnBanUserDialog = ({
  handleCloseUnBanDialog,
  handleUnBanUser,
  isUnBanDialogOpen,
  loading,
  userName,
}: PropsType) => {
  return (
    <Dialog
      cancelButtonText={'No'}
      confirmButtonText={'Yes'}
      disabled={loading}
      invertButtons
      onCancelButtonClick={handleCloseUnBanDialog}
      onClose={handleCloseUnBanDialog}
      onConfirmButtonClick={handleUnBanUser}
      open={isUnBanDialogOpen}
      title={'Ban user'}
    >
      <p>Are you sure you want to UN BAN, {userName}?</p>
    </Dialog>
  )
}
