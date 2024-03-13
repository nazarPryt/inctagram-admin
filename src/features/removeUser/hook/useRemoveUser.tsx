import { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'

import { GET_PROFILE_INFO } from '@/entities/profileInfo/api/getProfileInfo/getProfileInfo.api'
import { GET_USERS } from '@/entities/usersList/api/getUsers.api'

import { useRemoveUserMutation } from '../api/removeUser.api.types'
import { RemoveUserDialog } from '../ui/RemoveUserDialog'

type useRemoveUserType = {
  setPopover: Dispatch<SetStateAction<boolean>>
  userId: number
  userName: string
}

export const useRemoveUser = ({ setPopover, userId, userName }: useRemoveUserType) => {
  const [removeUserMutation, { loading }] = useRemoveUserMutation({
    refetchQueries: [GET_USERS, 'getUsersList', GET_PROFILE_INFO, 'getProfileInfo'],
    variables: {
      userId,
    },
  })

  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false)

  const handleOpenDialog = () => {
    setIsRemoveDialogOpen(true)
  }
  const handleCloseDialog = () => {
    setIsRemoveDialogOpen(false)
  }
  const handleDeleteUser = async () => {
    try {
      const res = await removeUserMutation()

      if (res.data?.removeUser) {
        toast(`User ${userName} was successfully removed`, { type: 'success' })
      }
    } catch (e) {
      toast(`cant do it`, { type: 'error' })
    } finally {
      setPopover(false)
      setIsRemoveDialogOpen(false)
    }
  }
  const renderRemoveUserDialog = () => {
    return (
      <RemoveUserDialog
        handleCloseDialog={handleCloseDialog}
        handleDeleteUser={handleDeleteUser}
        isRemoveDialogOpen={isRemoveDialogOpen}
        loading={loading}
        userName={userName}
      />
    )
  }

  return {
    handleOpenDialog,
    renderRemoveUserDialog,
  }
}
