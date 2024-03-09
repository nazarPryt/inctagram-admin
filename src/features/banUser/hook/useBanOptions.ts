import { useTranslation } from '@/shared/hooks/useTranslation'

export const useBanOptions = () => {
  const { t } = useTranslation()

  return [
    {
      label: t.user_list_popover.ban_bad_behavior,
      value: 'bad-behavior',
    },
    {
      label: t.user_list_popover.ban_advertising,
      value: 'advertising-placement',
    },
    {
      label: t.user_list_popover.ban_another,
      value: 'another-reason',
    },
  ]
}
