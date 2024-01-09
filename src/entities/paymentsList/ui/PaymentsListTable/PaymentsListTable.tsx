import React from 'react'

import { GetListPaymentsQuery } from '@/entities/paymentsList/api/getPayments.api.types'
import { PaymentsListTableHeader } from '@/entities/paymentsList/ui/PaymentsListTable/PaymentsListTableHeader/PaymentsListTableHeader'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadSortType,
  TableRow,
} from '@nazar-pryt/inctagram-ui-kit'

type PropsType = {
  onSort?: (sort: TableHeadSortType) => void
  paymentsData?: GetListPaymentsQuery
  sort?: TableHeadSortType
}
export const PaymentsListTable = ({ onSort, paymentsData, sort }: PropsType) => {
  return (
    <Table>
      <TableHead columns={PaymentsListTableHeader} onSort={onSort} sort={sort} />
      <TableBody>
        {/*  {paymentsData.getListPayments.items.map(payment => {*/}
        {/*    return (*/}
        {/*      <TableRow key={payment.id}>*/}
        {/*        <TableCell>{payment.paymentType}</TableCell>*/}
        {/*        <TableCell>{payment.price}</TableCell>*/}
        {/*        <TableCell>{payment.status}</TableCell>*/}
        {/*        <TableCell>{payment.type}</TableCell>*/}
        {/*        <TableCell>{payment.startDate}</TableCell>*/}
        {/*      </TableRow>*/}
        {/*    )*/}
        {/*  })}*/}
      </TableBody>
    </Table>
  )
}
