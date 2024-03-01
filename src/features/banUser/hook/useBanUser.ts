import { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'

import { GET_PROFILE_INFO } from '@/entities/profileInfo/api/getProfileInfo/getProfileInfo.api'
import { GET_USERS } from '@/entities/usersList/api/getUsers.api'
import { useBanUserMutation, useUnbanUserMutation } from '@/features/banUser/api/banUser.api.types'

type useBanUserType = {
  setPopover: Dispatch<SetStateAction<boolean>>
  userId: number
  userName: string
}
export const useBanUser = ({ setPopover, userId, userName }: useBanUserType) => {
  const [banReason, setBanReason] = useState('')
  const [banDialog, setBanDialog] = useState(false)
  const [banUserMutation, { data, error, loading }] = useBanUserMutation({
    refetchQueries: [GET_USERS, 'getUsersList', GET_PROFILE_INFO, 'getProfileInfo'],
    variables: {
      banReason,
      userId,
    },
  })
  const [unBanUserMutation] = useUnbanUserMutation({
    refetchQueries: [GET_USERS, 'getUsersList', GET_PROFILE_INFO, 'getProfileInfo'],
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
      setPopover(false)
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
      setPopover(false)
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
