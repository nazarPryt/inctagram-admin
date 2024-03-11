import { useState } from 'react'

import { LogoutDialog } from '@/features/auth/logOut/ui/LogoutDialog'
import { useRouter } from 'next/router'

export const useLogOut = () => {
  const router = useRouter()
  const handleLogOut = () => {
    sessionStorage.clear()
    localStorage.clear()
    router.reload()
  }
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false)

  const handleOpenLogoutDialog = () => {
    setLogoutDialogOpen(true)
  }
  const handleCloseLogout = () => {
    setLogoutDialogOpen(false)
  }

  const renderLogoutDialog = () => {
    return (
      <LogoutDialog
        handleCloseLogout={handleCloseLogout}
        handleLogout={handleLogOut}
        logoutDialogOpen={logoutDialogOpen}
      />
    )
  }

  return {
    handleOpenLogoutDialog,
    renderLogoutDialog,
  }
}
