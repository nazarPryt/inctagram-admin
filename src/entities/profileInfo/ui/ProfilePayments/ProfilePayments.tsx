import { useProfilePayments } from '@/entities/profileInfo/hook/useProfilePayments'
import { MobileProfilePaymentsList } from '@/entities/profileInfo/ui/ProfilePayments/MobileProfilePaymentsList'
import { ProfilePaymentsStyled } from '@/entities/profileInfo/ui/ProfilePayments/ProfilePayments.styled'
import { ProfilePaymentsList } from '@/entities/profileInfo/ui/ProfilePayments/ProfilePaymentsList'
import { IsEmpty } from '@/shared/components/IsEmpty'
import { useScreenDetector } from '@/shared/hooks/useAdaptive'
import { useTranslation } from '@/shared/hooks/useTranslation'

export const ProfilePayments = ({ userID }: { userID: number }) => {
  const { t } = useTranslation()
  const { loading, payments, sort } = useProfilePayments({ userID })
  const { isMobile } = useScreenDetector()

  if (!payments) {
    return <IsEmpty text={t.profile_payments.not_payments} />
  }

  return (
    <ProfilePaymentsStyled>
      {isMobile && <MobileProfilePaymentsList loading={loading} payments={payments} />}
      {!isMobile && <ProfilePaymentsList loading={loading} payments={payments} sort={sort} />}
    </ProfilePaymentsStyled>
  )
}
