import { useGetAllPayments } from '@/entities/paymentsList/hook/useGetAllPayments'
import { PaymentsListTable } from '@/entities/paymentsList/ui/PaymentsListTable/PaymentsListTable'
import { Pagination } from '@nazar-pryt/inctagram-ui-kit'

import { PaymentsListStyled } from './PaymentsList.styled'

export const PaymentsList = () => {
  const {
    data,
    handleOnSort,
    loading,
    pageNumber,
    pageSize,
    setPageNumber,
    setPageSize,
    sort,
    totalPageCount,
  } = useGetAllPayments()

  return (
    <PaymentsListStyled>
      <PaymentsListTable
        loading={loading}
        onSort={handleOnSort}
        payments={data?.getPayments.items}
        sort={sort}
      />
      <Pagination
        count={totalPageCount}
        onChange={setPageNumber}
        onPerPageChange={setPageSize}
        page={pageNumber}
        perPage={pageSize}
        perPageOptions={[10, 20, 30, 50, 100]}
      />
    </PaymentsListStyled>
  )
}
