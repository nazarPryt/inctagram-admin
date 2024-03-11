import { Dispatch, SetStateAction, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { GET_PROFILE_INFO } from '@/entities/profileInfo/api/getProfileInfo/getProfileInfo.api'
import { GET_USERS } from '@/entities/usersList/api/getUsers.api'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useBanUserMutation } from '../api/banUser.api.types'
import { BanUserDialog } from '../ui/BanUserDialog'

type useBanUserType = {
  setPopover?: Dispatch<SetStateAction<boolean>>
  userId: number
  userName: string
}

export const useBanUser = ({ setPopover, userId, userName }: useBanUserType) => {
  const [banReason, setBanReason] = useState('')
  const [banDialog, setBanDialog] = useState(false)
  const [banUserMutation, { data, loading }] = useBanUserMutation({
    refetchQueries: [GET_USERS, 'getUsersList', GET_PROFILE_INFO, 'getProfileInfo'],
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
    // try {
    //   await banUserMutation()
    //
    //   if (data?.banUser) {
    //     toast(`User ${userName} was successfully BANED`, { type: 'success' })
    //   }
    // } catch (e) {
    //   toast(`cant do it`, { type: 'error' })
    // } finally {
    //   setBanDialog(false)
    //   setPopover && setPopover(false)
    // }
  }

  const handleSetBanReason = (value: string) => {
    setBanReason(value)
  }
  const renderBanUserDialog = () => {
    return (
      <BanUserDialog
        banDialog={banDialog}
        handleBanUser={handleBanUser}
        handleCloseBanDialog={handleCloseBanDialog}
        loading={loading}
        setBanReason={handleSetBanReason}
        userName={userName}
      />
    )
  }

  return {
    handleOpenBanDialog,
    renderBanUserDialog,
  }
}
