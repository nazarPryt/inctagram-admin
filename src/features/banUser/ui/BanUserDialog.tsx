import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { useTranslation } from '@/shared/hooks/useTranslation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dialog, Select, TextArea } from '@nazar-pryt/inctagram-ui-kit'
import { z } from 'zod'

import { BanOptions, useBanOptions } from '../hook/useBanOptions'

const textAreaValueLength = 10

const banUserFormSchema = z.object({
  reasonSelectValue: z.nativeEnum(BanOptions),
  textAreaValue: z
    .string()
    .max(
      textAreaValueLength,
      `Ban reason-message cant be more then ${textAreaValueLength} symbols!!`
    ),
})

export type BanUserFormSchemaType = z.infer<typeof banUserFormSchema>

type BanUserDialogType = {
  banDialog: boolean
  handleBanUser: () => void
  handleCloseBanDialog: () => void
  loading: boolean
  setBanReason: (value: string) => void
  userName: string
}
export const BanUserDialog = ({
  banDialog,
  handleBanUser,
  handleCloseBanDialog,
  loading,
  setBanReason,
  userName,
}: BanUserDialogType) => {
  const { t } = useTranslation()
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<BanUserFormSchemaType>({
    defaultValues: { textAreaValue: '' },
    resolver: zodResolver(banUserFormSchema),
  })

  const onSubmit: SubmitHandler<BanUserFormSchemaType> = data => console.log(data)
  const banOptions = useBanOptions()

  const showTextArea = watch('reasonSelectValue') === 'another-reason'

  return (
    <Dialog
      cancelButtonText={t.common.no}
      confirmButtonText={t.common.yes}
      disabled={loading}
      invertButtons
      onCancelButtonClick={handleCloseBanDialog}
      onClose={handleCloseBanDialog}
      onConfirmButtonClick={handleSubmit(onSubmit)}
      open={banDialog}
      title={t.user_list_popover.ban}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          {t.user_list_popover.ban_question}, {userName}?
        </p>
        <Controller
          control={control}
          name={'reasonSelectValue'}
          render={({ field: { onChange, value } }) => (
            <Select
              onChange={onChange}
              options={banOptions}
              placeholder={t.user_list_popover.ban_reason}
              portal={false}
              value={value}
            />
          )}
        />

        {showTextArea && (
          <Controller
            control={control}
            name={'textAreaValue'}
            render={({ field: { onChange, value } }) => (
              <TextArea
                error={errors.textAreaValue?.message}
                maxLength={textAreaValueLength}
                onChange={onChange}
                style={{ backgroundColor: 'gray' }}
                value={value}
              />
            )}
          />
        )}
      </form>
    </Dialog>
  )
}
