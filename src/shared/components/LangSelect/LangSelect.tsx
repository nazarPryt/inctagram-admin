import { Select, SelectOptionType } from '@nazar-pryt/inctagram-ui-kit'
import { useRouter } from 'next/router'

export const LangSelect = () => {
  const { asPath, locale, pathname, push, query } = useRouter()

  const options: SelectOptionType[] = [
    { label: 'ru', value: 'ru' },
    { label: 'en', value: 'en' },
  ]
  const changeLangHandler = (locale: string) => {
    void push({ pathname, query }, asPath, { locale })
  }

  return (
    <div>
      <Select onChange={changeLangHandler} options={options} value={locale!} />
    </div>
  )
}
