import { useTranslation } from '@/shared/hooks/useTranslation'
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
  const { t } = useTranslation()

  return (
    <Dialog
      cancelButtonText={t.common.no}
      confirmButtonText={t.common.yes}
      disabled={loading}
      invertButtons
      onCancelButtonClick={handleCloseUnBanDialog}
      onClose={handleCloseUnBanDialog}
      onConfirmButtonClick={handleUnBanUser}
      open={isUnBanDialogOpen}
      title={t.user_list_popover.unban}
    >
      <p>
        {t.user_list_popover.unban_question}, {userName}?
      </p>
    </Dialog>
  )
}
