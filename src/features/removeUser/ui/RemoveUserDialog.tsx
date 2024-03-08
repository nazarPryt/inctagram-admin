import { Dialog } from '@nazar-pryt/inctagram-ui-kit'

type RemoveUserDialogType = {
  handleCloseDialog: () => void
  handleDeleteUser: () => void
  isRemoveDialogOpen: boolean
  loading: boolean
  userName: string
}
export const RemoveUserDialog = ({
  handleCloseDialog,
  handleDeleteUser,
  isRemoveDialogOpen,
  loading,
  userName,
}: RemoveUserDialogType) => {
  return (
    <Dialog
      cancelButtonText={'No'}
      confirmButtonText={'Yes'}
      disabled={loading}
      invertButtons
      onCancelButtonClick={handleCloseDialog}
      onClose={handleCloseDialog}
      onConfirmButtonClick={handleDeleteUser}
      open={isRemoveDialogOpen}
      title={'Delete user'}
    >
      <p>Are you sure to delete user {userName}?</p>
    </Dialog>
  )
}
