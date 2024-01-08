import { useState } from 'react'
import { toast } from 'react-toastify'

import { UsersListPopoverType } from '@/entities/usersList/ui/UsersListPopover/UsersListPopover'
import { useRemoveUserMutation } from '@/features/removeUser/api/removeUser.api.types'

export const useRemoveUser = ({ userID, userName }: UsersListPopoverType) => {
  const [removeUserMutation, { data, error, loading }] = useRemoveUserMutation({
    variables: {
      // userId: userID,
      userId: 55555555,
    },
  })
  const [popover, setPopover] = useState(false)
  const [dialog, setDialog] = useState(false)

  const handleOpenDialog = () => {
    setDialog(true)
  }
  const handleCloseDialog = () => {
    setDialog(false)
  }
  const handleDeleteUser = async () => {
    try {
      await removeUserMutation() //todo attention it WORKS!!
      if (data?.removeUser) {
        toast(`User ${userName} was successfully removed`, { type: 'success' })
      } else {
        toast('cant do it', { type: 'error' })
      }
    } catch (e: any) {
      console.log(e)
      toast(`cant do it`, { type: 'error' })
    } finally {
      setPopover(false)
      setDialog(false)
    }
  }

  return {
    dialog,
    handleCloseDialog,
    handleDeleteUser,
    handleOpenDialog,
    loading,
    popover,
    setPopover,
  }
}
