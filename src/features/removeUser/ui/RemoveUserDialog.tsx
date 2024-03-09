import { useTranslation } from '@/shared/hooks/useTranslation'
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
  const { t } = useTranslation()

  return (
    <Dialog
      cancelButtonText={t.common.no}
      confirmButtonText={t.common.yes}
      disabled={loading}
      invertButtons
      onCancelButtonClick={handleCloseDialog}
      onClose={handleCloseDialog}
      onConfirmButtonClick={handleDeleteUser}
      open={isRemoveDialogOpen}
      title={t.user_list_popover.delete}
    >
      <p>
        {t.user_list_popover.delete_question} {userName}?
      </p>
    </Dialog>
  )
}
