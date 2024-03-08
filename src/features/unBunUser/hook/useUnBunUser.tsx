import { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'

import { GET_PROFILE_INFO } from '@/entities/profileInfo/api/getProfileInfo/getProfileInfo.api'
import { GET_USERS } from '@/entities/usersList/api/getUsers.api'

import { useUnbanUserMutation } from '../api/unBunUser.api.types'
import { UnBanUserDialog } from '../ui/unBanUserDialog'

type useUnBunUserType = {
  setPopover?: Dispatch<SetStateAction<boolean>>
  userId: number
  userName: string
}
export const useUnBunUser = ({ setPopover, userId, userName }: useUnBunUserType) => {
  const [isUnBanDialogOpen, setIsUnBanDialogOpen] = useState(false)
  const [unBanUserMutation, { data, loading }] = useUnbanUserMutation({
    refetchQueries: [GET_USERS, 'getUsersList', GET_PROFILE_INFO, 'getProfileInfo'],
    variables: {
      userId,
    },
  })
  const handleOpenUnBanDialog = () => {
    setIsUnBanDialogOpen(true)
  }
  const handleCloseUnBanDialog = () => {
    setIsUnBanDialogOpen(false)
  }

  const handleUnBanUser = async () => {
    try {
      await unBanUserMutation()

      if (data?.unbanUser) {
        toast(`User ${userName} was successfully unBaned`, { type: 'success' })
      }
    } catch (e) {
      toast(`cant do it`, { type: 'error' })
    } finally {
      setIsUnBanDialogOpen(false)
      setPopover && setPopover(false)
    }
  }
  const renderUnBanUserDialog = () => {
    return (
      <UnBanUserDialog
        handleCloseUnBanDialog={handleCloseUnBanDialog}
        handleUnBanUser={handleUnBanUser}
        isUnBanDialogOpen={isUnBanDialogOpen}
        loading={loading}
        userName={userName}
      />
    )
  }

  return {
    handleOpenUnBanDialog,
    renderUnBanUserDialog,
  }
}
