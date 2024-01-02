import { ReactNode } from 'react'

import { BlockStatus } from '@/shared/lib/ApolloClient/Schema.types'
import { BlockedIcon, ProfileIcon } from '@nazar-pryt/inctagram-ui-kit'

type SelectOption = { label: ReactNode | string; value: string } //todo import from library

export const blockedUsersOptions: SelectOption[] = [
  {
    label: (
      <span>
        <BlockedIcon /> Blocked
      </span>
    ),
    value: BlockStatus.Blocked,
  },
  {
    label: (
      <span>
        <ProfileIcon /> Not Blocked
      </span>
    ),
    value: 'active',
  },
]
