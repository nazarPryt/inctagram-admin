import { useTranslation } from '@/shared/hooks/useTranslation'
import { Dialog, Select } from '@nazar-pryt/inctagram-ui-kit'

type BanUserDialogType = {
  banDialog: boolean
  banReason: string
  handleBanUser: () => void
  handleCloseBanDialog: () => void
  loading: boolean
  setBanReason: (value: string) => void
  userName: string
}
export const BanUserDialog = ({
  banDialog,
  banReason,
  handleBanUser,
  handleCloseBanDialog,
  loading,
  setBanReason,
  userName,
}: BanUserDialogType) => {
  const { t } = useTranslation()
  const banOptions1 = [
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

  return (
    <Dialog
      cancelButtonText={t.common.no}
      confirmButtonText={t.common.yes}
      disabled={loading}
      invertButtons
      onCancelButtonClick={handleCloseBanDialog}
      onClose={handleCloseBanDialog}
      onConfirmButtonClick={handleBanUser}
      open={banDialog}
      title={t.user_list_popover.ban}
    >
      <p>
        {t.user_list_popover.ban_question}, {userName}?
      </p>
      <Select
        onChange={setBanReason}
        options={banOptions1}
        placeholder={t.user_list_popover.ban_reason}
        portal={false}
        value={banReason}
      />
    </Dialog>
  )
}
