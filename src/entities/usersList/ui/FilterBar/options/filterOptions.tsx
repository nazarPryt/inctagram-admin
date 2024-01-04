import { BlockStatus } from '@/shared/lib/ApolloClient/Schema.types'
import { SelectOptionType } from '@nazar-pryt/inctagram-ui-kit/dist/components/Select/Select'

export const blockedUsersOptions: SelectOptionType[] = [
  {
    label: 'Blocked',
    value: BlockStatus.Blocked,
  },
  {
    label: 'Not Blocked',
    value: 'active',
  },
]
