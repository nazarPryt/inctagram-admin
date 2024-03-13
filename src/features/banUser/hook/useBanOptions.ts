import { useTranslation } from '@/shared/hooks/useTranslation'

export enum BanOptions {
  'advertising' = 'advertising-placement',
  'anotherReason' = 'another-reason',
  'badBehavior' = 'bad-behavior',
}

type useBanOptionsType = { label: string; value: BanOptions }[]

export const useBanOptions = (): useBanOptionsType => {
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
