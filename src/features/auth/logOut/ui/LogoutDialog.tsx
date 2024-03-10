import React from 'react'

import { useTranslation } from '@/shared/hooks/useTranslation'
import { Dialog } from '@nazar-pryt/inctagram-ui-kit'

type PropsType = {
  handleCloseLogout: () => void
  handleLogout: () => void
  logoutDialogOpen: boolean
}

export const LogoutDialog = ({ handleCloseLogout, handleLogout, logoutDialogOpen }: PropsType) => {
  const { t } = useTranslation()

  return (
    <Dialog
      cancelButtonText={t.common.no}
      confirmButtonText={t.common.yes}
      invertButtons
      onCancelButtonClick={handleCloseLogout}
      onClose={handleCloseLogout}
      onConfirmButtonClick={handleLogout}
      open={logoutDialogOpen}
      title={t.logout.title}
    >
      <p>{t.logout.logout_question}?</p>
    </Dialog>
  )
}
