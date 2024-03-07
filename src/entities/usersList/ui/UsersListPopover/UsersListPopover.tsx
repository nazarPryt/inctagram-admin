import { useState } from 'react'

import { PATH } from '@/_app/AppSettings/PATH'
import { GetUsersListQuery } from '@/entities/usersList/api/getUsers.api.types'
import { useBanUser } from '@/features/banUser/hook/useBanUser'
import { useRemoveUser } from '@/features/removeUser/hook/useRemoveUser'
import { useTranslation } from '@/shared/hooks/useTranslation'
import {
  BlockedIcon,
  Dialog,
  DotsHorizontal,
  PersonRemoveIcon,
  Popover,
  PopoverItem,
  ProfileIcon,
  Select,
} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

export type UsersListPopoverType = {
  userBan: GetUsersListQuery['getUsers']['users'][number]['userBan']
  userId: number
  userName: string
}

export const UsersListPopover = ({ userBan, userId, userName }: UsersListPopoverType) => {
  const [popover, setPopover] = useState(false)

  const { handleCloseDialog, handleDeleteUser, handleOpenDialog, removeDialog } = useRemoveUser({
    setPopover,
    userId,
    userName,
  })
  const {
    banDialog,
    banReason,
    handleBanUser,
    handleCloseBanDialog,
    handleOpenBanDialog,
    handleUnBan,
    setBanReason,
  } = useBanUser({
    setPopover,
    userId,
    userName,
  })
  const { t } = useTranslation()

  // Todo Change banOptions1 || banOptions
  const banOptions1 = [
    {
      label: t.user_list_popover.ban_bad_behavior,
      value: 'bad-behavior',
    },
    {
      label: t.user_list_popover.ban_advertising,
      value: 'advertising-placement',
    },
    {
      label: t.user_list_popover.ban_another,
      value: 'another-reason',
    },
  ]

  return (
    <>
      <Popover icon={<DotsHorizontal />} isOpen={popover} onOpenChange={setPopover}>
        <PopoverItem
          icon={<PersonRemoveIcon />}
          name={t.user_list_popover.delete}
          onClick={handleOpenDialog}
        />
        {userBan ? (
          <PopoverItem
            icon={<ProfileIcon />}
            name={t.user_list_popover.unban}
            onClick={handleUnBan}
          />
        ) : (
          <PopoverItem
            icon={<BlockedIcon />}
            name={t.user_list_popover.ban}
            onClick={handleOpenBanDialog}
          />
        )}

        <PopoverItem
          as={Link}
          href={`${PATH.USER}${userId}`}
          icon={<DotsHorizontal />}
          name={t.user_list_popover.more}
        />
      </Popover>
      <Dialog
        cancelButtonText={t.common.no}
        confirmButtonText={t.common.yes}
        invertButtons
        onCancelButtonClick={handleCloseBanDialog}
        onClose={handleCloseBanDialog}
        onConfirmButtonClick={handleBanUser}
        open={banDialog}
        title={t.user_list_popover.ban}
      >
        <p>
          {t.user_list_popover.ban_question}, {userName}?
        </p>
        <Select
          onChange={setBanReason}
          options={banOptions1}
          placeholder={t.user_list_popover.ban_reason}
          portal={false}
          value={banReason}
        />
      </Dialog>
      <Dialog
        cancelButtonText={t.common.no}
        confirmButtonText={t.common.yes}
        invertButtons
        onCancelButtonClick={handleCloseDialog}
        onClose={handleCloseDialog}
        onConfirmButtonClick={handleDeleteUser}
        open={removeDialog}
        title={t.user_list_popover.delete}
      >
        <p>
          {t.user_list_popover.delete_question} {userName}?
        </p>
      </Dialog>
    </>
  )
}
