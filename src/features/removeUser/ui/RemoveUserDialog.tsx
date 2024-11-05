import { useScreenDetector } from '@/shared/hooks/useAdaptive'
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
  const { isMobile } = useScreenDetector()

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
      size={isMobile ? 'sm' : 'md'}
      title={t.user_list_popover.delete}
    >
      <p>
        {t.user_list_popover.delete_question} {userName}?
      </p>
    </Dialog>
  )
}
