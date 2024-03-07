import { useEffect } from 'react'

import { useLocalStorage } from '@/shared/hooks/useLocalStorage'
import { Select, SelectOptionType } from '@nazar-pryt/inctagram-ui-kit'
import { useRouter } from 'next/router'

export const LangSelect = () => {
  const { asPath, locale, pathname, push, query } = useRouter()
  const [storedValue, setValue] = useLocalStorage('lang', 'en')
  const options: SelectOptionType[] = [
    { label: 'ru', value: 'ru' },
    { label: 'en', value: 'en' },
  ]

  useEffect(() => {
    // If the value in the LocalStore is available, set it as the current language
    if (storedValue) {
      changeLangHandler(storedValue)
    }
  }, [])

  const changeLangHandler = (selectedLocale: string) => {
    void push({ pathname, query }, asPath, { locale: selectedLocale })
    setValue(selectedLocale)
  }

  return (
    <div>
      <Select onChange={changeLangHandler} options={options} value={locale!} />
    </div>
  )
}
