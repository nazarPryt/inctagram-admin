import { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'

import { useBanUserMutation } from '@/features/banUser/api/banUser.api.types'

type useBanUserType = {
  setPopover: Dispatch<SetStateAction<boolean>>
  userId: number
  userName: string
}
export const useBanUser = ({ setPopover, userId, userName }: useBanUserType) => {
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
      await banUserMutation()

      if (data?.banUser) {
        toast(`User ${userName} was successfully BANED`, { type: 'success' })
      } else {
        toast('cant do it', { type: 'error' })
      }
    } catch (e) {
      toast(`cant do it`, { type: 'error' })
    } finally {
      setPopover(false)
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
