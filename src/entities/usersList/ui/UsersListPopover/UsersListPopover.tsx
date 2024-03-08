import { useState } from 'react'

import { PATH } from '@/_app/AppSettings/PATH'
import { GetUsersListQuery } from '@/entities/usersList/api/getUsers.api.types'
import { useBanUser } from '@/features/banUser/hook/useBanUser'
import { useRemoveUser } from '@/features/removeUser/hook/useRemoveUser'
import { useUnBunUser } from '@/features/unBunUser/hook/useUnBunUser'
import {
  BlockedIcon,
  DotsHorizontal,
  PersonRemoveIcon,
  Popover,
  PopoverItem,
  ProfileIcon,
} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

export type UsersListPopoverType = {
  userBan: GetUsersListQuery['getUsers']['users'][number]['userBan']
  userId: number
  userName: string
}

export const UsersListPopover = ({ userBan, userId, userName }: UsersListPopoverType) => {
  const [popover, setPopover] = useState(false)

  const { handleOpenDialog, renderRemoveUserDialog } = useRemoveUser({
    setPopover,
    userId,
    userName,
  })
  const { handleOpenBanDialog, renderBanUserDialog } = useBanUser({
    setPopover,
    userId,
    userName,
  })
  const { handleOpenUnBanDialog, renderUnBanUserDialog } = useUnBunUser({
    setPopover,
    userId,
    userName,
  })

  return (
    <>
      <Popover icon={<DotsHorizontal />} isOpen={popover} onOpenChange={setPopover}>
        <PopoverItem icon={<PersonRemoveIcon />} name={'Delete User'} onClick={handleOpenDialog} />
        {userBan ? (
          <PopoverItem icon={<ProfileIcon />} name={'UnBun'} onClick={handleOpenUnBanDialog} />
        ) : (
          <PopoverItem
            icon={<BlockedIcon />}
            name={'Bun in the system'}
            onClick={handleOpenBanDialog}
          />
        )}

        <PopoverItem
          as={Link}
          href={`${PATH.USER}${userId}`}
          icon={<DotsHorizontal />}
          name={'More information'}
        />
      </Popover>
      {renderUnBanUserDialog()}
      {renderBanUserDialog()}
      {renderRemoveUserDialog()}
    </>
  )
}
