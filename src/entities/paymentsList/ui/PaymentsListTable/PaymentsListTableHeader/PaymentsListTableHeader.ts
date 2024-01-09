import { TableHeadColumnType } from '@nazar-pryt/inctagram-ui-kit'

export const PaymentsListTableHeader: TableHeadColumnType[] = [
  {
    key: 'userName',
    sortable: true,
    title: 'UserName',
  },
  {
    key: 'data-added',
    sortable: true,
    title: 'Date added',
  },
  {
    key: 'amount',
    sortable: true,
    title: 'Amount',
  },
  {
    key: 'subscription',
    sortable: true,
    title: 'Subscription',
  },
  {
    key: 'payment',
    sortable: true,
    title: 'Payment Method',
  },
]
