import { UserBlockStatus } from '@/shared/lib/ApolloClient/Schema.types'
import { SelectOptionType } from '@nazar-pryt/inctagram-ui-kit/dist/components/Select/Select'

export const blockedUsersOptions: SelectOptionType[] = [
  {
    label: 'All',
    value: UserBlockStatus.All,
  },
  {
    label: 'Blocked',
    value: UserBlockStatus.Blocked,
  },
  {
    label: 'Not Blocked',
    value: UserBlockStatus.Unblocked,
  },
]
