import { TableHeadColumnType } from '@nazar-pryt/inctagram-ui-kit'

export const PaymentsListHeader: TableHeadColumnType[] = [
  {
    key: 'Date-of-Payment',
    sortable: true,
    title: 'Date of Payment',
  },
  {
    key: 'End-date-of-subscription',
    sortable: true,
    title: 'End date of subscription',
  },
  {
    key: 'amount',
    sortable: true,
    title: 'Amount, $',
  },
  {
    key: 'subscription',
    sortable: true,
    title: 'Subscription Type',
  },
  {
    key: 'payment',
    sortable: true,
    title: 'Payment Type',
  },
]
