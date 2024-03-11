import { useTranslation } from '@/shared/hooks/useTranslation'

export enum BanOptions {
  'advertising' = 'advertising-placement',
  'anotherReason' = 'another-reason',
  'badBehavior' = 'bad-behavior',
}

export const useBanOptions = (): { label: string; value: BanOptions }[] => {
  const { t } = useTranslation()

  return [
    {
      label: t.user_list_popover.ban_bad_behavior,
      value: BanOptions.badBehavior,
    },
    {
      label: t.user_list_popover.ban_advertising,
      value: BanOptions.advertising,
    },
    {
      label: t.user_list_popover.ban_another,
      value: BanOptions.anotherReason,
    },
  ]
}
// type formValues = {
//   extraSelectValue: string
//   reasonSelectValue: BanOptionsType
//   textareaValue: string
//
// }
//
// const Schema: {
//   [key in BanOptionsType]: keyof formValues
// } = {
//   ['advertising-placement']: 'extraSelectValue',
//   ['another-reason']: 'textareaValue',
//   ['bad-behavior']: 'reasonSelectValue',
//   ['new']: 'reasonSelectValue',
// }
//
// function toServer(value: string){}
//
// const onSubmit = (data: formValues) => {
//   const sendingKeyFronData = Schema[data.reasonSelectValue]
//   toServer(data[sendingKeyFronData])
// }
