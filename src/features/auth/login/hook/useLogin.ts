import { SubmitHandler, useForm } from 'react-hook-form'

import { useLoginAdminMutation } from '@/features/auth/login/api/login.generated'
import { PATH } from '@/shared/constants/PATH'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { z } from 'zod'

const loginAdminSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type loginAdminSchemaType = z.infer<typeof loginAdminSchema>

export const useLogin = () => {
  const router = useRouter()
  const [loginAdminMutation, { data, loading }] = useLoginAdminMutation()

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<loginAdminSchemaType>({
    defaultValues: { email: 'admin@gmail.com', password: 'admin' },
    resolver: zodResolver(loginAdminSchema),
  })
  const onSubmit: SubmitHandler<loginAdminSchemaType> = async data => {
    await loginAdminMutation({ variables: data })
  }

  return { errors, handleSubmit, loading, onSubmit, register }
}
