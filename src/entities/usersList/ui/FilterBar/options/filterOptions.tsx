import { ReactNode } from 'react'

import { BlockedIcon, ProfileIcon } from '@nazar-pryt/inctagram-ui-kit'

type SelectOption = { label: ReactNode | string; value: string } //todo import from library

export const blockedUsersOptions: SelectOption[] = [
  {
    label: (
      <span>
        <BlockedIcon /> Blocked
      </span>
    ),
    value: 'blocked',
  },
  {
    label: (
      <span>
        <ProfileIcon /> Not Blocked
      </span>
    ),
    value: 'null',
  },
]
