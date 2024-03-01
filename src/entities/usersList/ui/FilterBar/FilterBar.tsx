import { ChangeEvent } from 'react'

import { blockedUsersOptions } from '@/entities/usersList/ui/FilterBar/options/filterOptions'
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
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  return (
    <FilterBarStyled>
      <InputText
        onChange={handleChange}
        onClearClick={clearSearch}
        placeholder={'Search...'}
        search
        value={searchValue}
      />
      <Select
        onChange={setBlocked as (value: string) => void}
        options={blockedUsersOptions}
        placeholder={'Not selected'}
        value={blockedValue}
        width={200}
      />
    </FilterBarStyled>
  )
}
