import { useState } from 'react'

import {
  BlockedIcon,
  DotsHorizontal,
  PersonRemoveIcon,
  Popover,
  PopoverItem,
} from '@nazar-pryt/inctagram-ui-kit'

export const UsersListPopover = () => {
  const [popover, setPopover] = useState(false)

  const handleDeleteUser = () => {
    console.log('handleDeleteUser')
    setPopover(false)
  }
  const handleBunInSystem = () => {
    console.log('handleBunInSystem')
    setPopover(false)
  }
  const handleMoreInformation = () => {
    console.log('handleMoreInformation')
    setPopover(false)
  }

  return (
    <Popover icon={<DotsHorizontal />} isOpen={popover} onOpenChange={setPopover}>
      <PopoverItem icon={<PersonRemoveIcon />} name={'Delete User'} onClick={handleDeleteUser} />
      <PopoverItem icon={<BlockedIcon />} name={'Bun in the system'} onClick={handleBunInSystem} />
      <PopoverItem
        icon={<DotsHorizontal />}
        name={'More information'}
        onClick={handleMoreInformation}
      />
    </Popover>
  )
}
