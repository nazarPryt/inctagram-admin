import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useBanUserMutation } from '@/features/banUser/api/banUser.api.types'

type useBanUserType = {
  userId: number
  userName: string
}
export const useBanUser = ({ userId, userName }: useBanUserType) => {
  const [banReason, setBanReason] = useState('')
  const [banDialog, setBanDialog] = useState(false)

  const [banUserMutation, { data, error, loading }] = useBanUserMutation({
    variables: {
      banReason,
      userId,
    },
  })
  const handleOpenBanDialog = () => {
    setBanDialog(true)
  }
  const handleCloseBanDialog = () => {
    setBanDialog(false)
  }
  const handleBanUser = async () => {
    try {
      const res = await banUserMutation()

      if (res.data?.banUser) {
        toast(`User ${userName} was successfully BANED`, { type: 'success' })
      }
    } catch (e) {
      toast(`cant do it`, { type: 'error' })
    } finally {
      setBanDialog(false)
    }
  }
  const handleSetBanReason = (value: string) => {
    setBanReason(value)
  }

  return {
    banDialog,
    banReason,
    banUserMutation,
    data,
    error,
    handleBanUser,
    handleCloseBanDialog,
    handleOpenBanDialog,
    handleSetBanReason,
    loading,
    setBanReason,
  }
}
