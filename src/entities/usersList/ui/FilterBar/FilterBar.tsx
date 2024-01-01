import { ChangeEvent, useEffect, useState } from 'react'

import { blockedUsersOptions } from '@/entities/usersList/ui/FilterBar/options/filterOptions'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { InputText, Select } from '@nazar-pryt/inctagram-ui-kit'

import { FilterBarStyled } from './FilterBar.styled'

type FilterBarType = {
  clearSearch: () => void
  searchValue: string
  setSearch: (value: string) => void
}
export const FilterBar = ({ clearSearch, searchValue, setSearch }: FilterBarType) => {
  const [select, setSelect] = useState('Not selected')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }
  const debouncedValue = useDebounce<string>(searchValue, 800)

  useEffect(() => {
    setSearch(debouncedValue)
  }, [debouncedValue])

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
        onChange={setSelect}
        options={blockedUsersOptions}
        placeholder={select}
        value={select}
        width={200}
      />
    </FilterBarStyled>
  )
}
