import { useTranslation } from '@/shared/hooks/useTranslation'
import { Dialog } from '@nazar-pryt/inctagram-ui-kit'

import { useBanUserForm } from '../hook/useBanUserForm'

type BanUserDialogType = {
  banDialog: boolean
  handleBanUser: (banReason: string) => void
  handleCloseBanDialog: () => void
  loading: boolean
  userName: string
}
export const BanUserDialog = ({
  banDialog,
  handleBanUser,
  handleCloseBanDialog,
  loading,
  userName,
}: BanUserDialogType) => {
  const { t } = useTranslation()

  const { renderBanUserForm, submitBanUserForm } = useBanUserForm({ handleBanUser, userName })

  return (
    <Dialog
      cancelButtonText={t.common.no}
      confirmButtonText={t.common.yes}
      disabled={loading}
      invertButtons
      onCancelButtonClick={handleCloseBanDialog}
      onClose={handleCloseBanDialog}
      onConfirmButtonClick={submitBanUserForm}
      open={banDialog}
      title={t.user_list_popover.ban}
    >
      {renderBanUserForm()}
    </Dialog>
  )
}
