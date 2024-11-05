import { useGetAllPayments } from '@/entities/paymentsList/hook/useGetAllPayments'
import { MobilePaymentsListTable } from '@/entities/paymentsList/ui/MobilePaymentsListTable'
import { PaymentsListTable } from '@/entities/paymentsList/ui/PaymentsListTable'
import { useScreenDetector } from '@/shared/hooks/useAdaptive'
import { useTranslation } from '@/shared/hooks/useTranslation'
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

  const { t } = useTranslation()
  const { isMobile } = useScreenDetector()

  return (
    <PaymentsListStyled>
      {!isMobile && (
        <PaymentsListTable
          loading={loading}
          onSort={handleOnSort}
          payments={data?.getPayments.items}
          sort={sort}
        />
      )}
      {isMobile && <MobilePaymentsListTable loading={loading} payments={data?.getPayments.items} />}
      <Pagination
        count={totalPageCount}
        onChange={setPageNumber}
        onPage={t.pagination.on_page}
        onPerPageChange={setPageSize}
        page={pageNumber}
        perPage={pageSize}
        perPageOptions={[10, 20, 30]}
        show={t.pagination.show}
      />
    </PaymentsListStyled>
  )
}
