import { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'

import { useRemoveUserMutation } from '@/features/removeUser/api/removeUser.api.types'

type useRemoveUserType = {
  setPopover: Dispatch<SetStateAction<boolean>>
  userId: number
  userName: string
}

export const useRemoveUser = ({ setPopover, userId, userName }: useRemoveUserType) => {
  const [removeUserMutation, { data, error, loading }] = useRemoveUserMutation({
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
      await removeUserMutation() //todo attention it WORKS!!
      if (data?.removeUser) {
        toast(`User ${userName} was successfully removed`, { type: 'success' })
      } else {
        toast(error?.message, { type: 'error' })
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
