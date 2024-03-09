import { useTranslation } from '@/shared/hooks/useTranslation'
import { TableHeadColumnType } from '@nazar-pryt/inctagram-ui-kit'

export const usePaymentsListHeader = () => {
  const { t } = useTranslation()

  const paymentsListHeader: TableHeadColumnType[] = [
    {
      key: 'Date-of-Payment',
      sortable: true,
      title: t.table.payment_date,
    },
    {
      key: 'End-date-of-subscription',
      sortable: true,
      title: t.table.payment_end_date_sub,
    },
    {
      key: 'amount',
      sortable: true,
      title: t.table.amount,
    },
    {
      key: 'subscription',
      sortable: true,
      title: t.table.subscription,
    },
    {
      key: 'payment',
      sortable: true,
      title: t.table.payment_method,
    },
  ]

  return paymentsListHeader
}
