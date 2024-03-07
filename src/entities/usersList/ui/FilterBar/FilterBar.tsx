import { ChangeEvent } from 'react'

import { useTranslation } from '@/shared/hooks/useTranslation'
import { UserBlockStatus } from '@/shared/lib/ApolloClient/Schema.types'
import { InputText, Select } from '@nazar-pryt/inctagram-ui-kit'
import { SelectOptionType } from '@nazar-pryt/inctagram-ui-kit/dist/components/Select/Select'

import { FilterBarStyled } from './FilterBar.styled'

type FilterBarType = {
  blockedValue: UserBlockStatus
  clearSearch: () => void
  searchValue: string
  setBlocked: (value: UserBlockStatus) => void
  setSearch: (value: string) => void
}
export const FilterBar = ({
  blockedValue,
  clearSearch,
  searchValue,
  setBlocked,
  setSearch,
}: FilterBarType) => {
  const { t } = useTranslation()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  // Todo Change blockedUsersOptions1 || blockedUsersOptions
  const blockedUsersOptions1: SelectOptionType[] = [
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

  return (
    <FilterBarStyled>
      <InputText
        onChange={handleChange}
        onClearClick={clearSearch}
        placeholder={t.common.search}
        search
        value={searchValue}
      />
      <Select
        //Todo Question
        onChange={setBlocked as (value: string) => void}
        options={blockedUsersOptions1}
        placeholder={'Not selected'}
        value={blockedValue}
        width={350}
      />
    </FilterBarStyled>
  )
}
