import { useProfilePayments } from '@/entities/profileInfo/hook/useProfilePayments'
import { MobileProfilePaymentsList } from '@/entities/profileInfo/ui/ProfilePayments/MobileProfilePaymentsList'
import { ProfilePaymentsStyled } from '@/entities/profileInfo/ui/ProfilePayments/ProfilePayments.styled'
import { ProfilePaymentsList } from '@/entities/profileInfo/ui/ProfilePayments/ProfilePaymentsList'
import { IsEmpty } from '@/shared/components/IsEmpty'
import { useScreenDetector } from '@/shared/hooks/useAdaptive'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { TableSkeleton } from '@nazar-pryt/inctagram-ui-kit'

export const ProfilePayments = ({ userID }: { userID: number }) => {
  const { t } = useTranslation()
  const { loading, payments, sort } = useProfilePayments({ userID })
  const { isMobile } = useScreenDetector()

  if (loading) {
    return <TableSkeleton columns={3} rows={5} />
  }
  if (Array.isArray(payments) && payments.length === 0) {
    return <IsEmpty text={t.empty.user_payments} />
  }

  return (
    <ProfilePaymentsStyled>
      {isMobile && <MobileProfilePaymentsList payments={payments} />}
      {!isMobile && <ProfilePaymentsList payments={payments} sort={sort} />}
    </ProfilePaymentsStyled>
  )
}
