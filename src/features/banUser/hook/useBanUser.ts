import { useState } from 'react'
import { toast } from 'react-toastify'

import { GET_USERS } from '@/entities/usersList/api/getUsers.api'
import {
  UnbanUserMutation,
  useBanUserMutation,
  useUnbanUserMutation,
} from '@/features/banUser/api/banUser.api.types'

type useBanUserType = {
  userId: number
  userName: string
}
export const useBanUser = ({ userId, userName }: useBanUserType) => {
  const [banReason, setBanReason] = useState('')
  const [banDialog, setBanDialog] = useState(false)
  const [banUserMutation, { data, error, loading }] = useBanUserMutation({
    refetchQueries: [GET_USERS, 'getUsersList'],
    variables: {
      banReason,
      userId,
    },
  })
  const [unBanUserMutation, { data: unBanData, error: unBanError, loading: unBanLoading }] =
    useUnbanUserMutation({
      refetchQueries: [GET_USERS, 'getUsersList'],
      variables: {
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

  const handleUnBan = async () => {
    try {
      const res = await unBanUserMutation()

      if (res.data?.unbanUser) {
        toast(`User ${userName} was successfully UNBANED`, { type: 'success' })
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
    handleUnBan,
    loading,
    setBanReason,
  }
}
