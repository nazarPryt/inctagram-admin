import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { useTranslation } from '@/shared/hooks/useTranslation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Select, TextArea } from '@nazar-pryt/inctagram-ui-kit'
import { z } from 'zod'

import { BanOptions, useBanOptions } from '../hook/useBanOptions'

const maxTextAreaValueLength = 20

const banUserFormSchema = z.object({
  reasonSelectValue: z.nativeEnum(BanOptions),
  textAreaValue: z
    .string()
    .trim()
    .max(
      maxTextAreaValueLength,
      `Ban-reason message cant be more then ${maxTextAreaValueLength} symbols!!`
    ),
})

export type BanUserFormSchemaType = z.infer<typeof banUserFormSchema>

type SchemaType = {
  [key in BanOptions]: keyof BanUserFormSchemaType
}
const Schema: SchemaType = {
  ['advertising-placement']: 'reasonSelectValue',
  ['another-reason']: 'textAreaValue',
  ['bad-behavior']: 'reasonSelectValue',
}

type PropsType = {
  handleBanUser: (banReason: string) => void
  userName: string
}

export const useBanUserForm = ({ handleBanUser, userName }: PropsType) => {
  const { t } = useTranslation()
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
    watch,
  } = useForm<BanUserFormSchemaType>({
    defaultValues: { reasonSelectValue: undefined, textAreaValue: '' }, // todo fix console warning due to the undefined
    mode: 'all',
    resolver: zodResolver(banUserFormSchema),
  })
  const banOptions = useBanOptions()

  const showTextArea = watch('reasonSelectValue') === BanOptions.anotherReason

  const onSubmit: SubmitHandler<BanUserFormSchemaType> = data => {
    const sendingKeyFromData = Schema[data.reasonSelectValue]

    if (data[sendingKeyFromData].length) {
      handleBanUser(data[sendingKeyFromData])
    } else {
      setError('textAreaValue', { message: 'Ban-reason message is required' })
    }
  }
  const renderBanUserForm = () => {
    return (
      <form>
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
                autoFocus
                error={errors.textAreaValue?.message}
                maxLength={maxTextAreaValueLength}
                onChange={onChange}
                style={{ backgroundColor: 'gray' }}
                value={value}
              />
            )}
          />
        )}
      </form>
    )
  }

  return {
    renderBanUserForm,
    submitBanUserForm: handleSubmit(onSubmit),
  }
}
