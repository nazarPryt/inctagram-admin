import { useTranslation } from '@/shared/hooks/useTranslation'
import { TableHeadColumnType } from '@nazar-pryt/inctagram-ui-kit'

export const usePaymentsListTableHeader = () => {
  const { t } = useTranslation()

  const paymentsHeader: TableHeadColumnType[] = [
    {
      key: 'userName',
      sortable: true,
      title: t.table.user_name,
    },
    {
      key: 'data-added',
      sortable: true,
      title: t.table.added,
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

  return paymentsHeader
}
