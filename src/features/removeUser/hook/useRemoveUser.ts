import { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'

import { GET_PROFILE_INFO } from '@/entities/profileInfo/api/getProfileInfo/getProfileInfo.api'
import { GET_USERS } from '@/entities/usersList/api/getUsers.api'
import { useRemoveUserMutation } from '@/features/removeUser/api/removeUser.api.types'

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

  const [removeDialog, setRemoveDialog] = useState(false)

  const handleOpenDialog = () => {
    setRemoveDialog(true)
  }
  const handleCloseDialog = () => {
    setRemoveDialog(false)
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
      setRemoveDialog(false)
    }
  }

  return {
    handleCloseDialog,
    handleDeleteUser,
    handleOpenDialog,
    loading,
    removeDialog,
  }
}
