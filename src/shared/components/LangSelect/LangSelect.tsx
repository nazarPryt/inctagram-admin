import { useEffect } from 'react'

import flagRus from '@/public/assets/flagRus.png'
import flagUK from '@/public/assets/flagUK.png'
import { useLocalStorage } from '@/shared/hooks/useLocalStorage'
import { Select, SelectOptionType } from '@nazar-pryt/inctagram-ui-kit'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const LangSelect = () => {
  const { asPath, locale, pathname, push, query } = useRouter()
  const [storedValue, setValue] = useLocalStorage('lang', 'en')
  const options: SelectOptionType[] = [
    {
      icon: <Image alt={'flagRus'} height={36} src={flagRus} width={36} />,
      label: 'Russian',
      value: 'ru',
    },
    {
      icon: <Image alt={'flagUK'} height={36} src={flagUK} width={36} />,
      label: 'English',
      value: 'en',
    },
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

  return <Select onChange={changeLangHandler} options={options} value={locale!} width={140} />
}
