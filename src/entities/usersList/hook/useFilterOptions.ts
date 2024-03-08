import { useTranslation } from '@/shared/hooks/useTranslation'
import { UserBlockStatus } from '@/shared/lib/ApolloClient/Schema.types'
import { SelectOptionType } from '@nazar-pryt/inctagram-ui-kit/dist/components/Select/Select'

export const useFilterOptions = () => {
  const { t } = useTranslation()

  const blockedUsersOptions: SelectOptionType[] = [
    {
      label: t.filter.all,
      value: UserBlockStatus.All,
    },
    {
      label: t.filter.blocked,
      value: UserBlockStatus.Blocked,
    },
    {
      label: t.filter.not_blocked,
      value: UserBlockStatus.Unblocked,
    },
  ]

  return blockedUsersOptions
}
