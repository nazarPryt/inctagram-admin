import { ChangeEvent } from 'react'

import { useFilterOptions } from '@/entities/usersList/hook/useFilterOptions'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { UserBlockStatus } from '@/shared/lib/ApolloClient/Schema.types'
import { InputText, Select } from '@nazar-pryt/inctagram-ui-kit'

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

  const blockedUsersOptions = useFilterOptions()

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
        options={blockedUsersOptions}
        placeholder={'Not selected'}
        value={blockedValue}
        width={350}
      />
    </FilterBarStyled>
  )
}
