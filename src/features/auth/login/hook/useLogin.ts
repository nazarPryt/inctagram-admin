import { SubmitHandler, useForm } from 'react-hook-form'

import { PATH } from '@/shared/constants/PATH'
import { isLoggedIn } from '@/shared/constants/constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { z } from 'zod'

import { useLoginAdminMutation } from '../api/login.types'

const loginAdminSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type loginAdminSchemaType = z.infer<typeof loginAdminSchema>

export const useLogin = () => {
  const router = useRouter()
  const [loginAdminMutation, { loading }] = useLoginAdminMutation()

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<loginAdminSchemaType>({
    defaultValues: { email: 'admin@gmail.com', password: 'admin' },
    resolver: zodResolver(loginAdminSchema),
  })
  const onSubmit: SubmitHandler<loginAdminSchemaType> = async data => {
    const res = await loginAdminMutation({ variables: data })

    if (res.data?.loginAdmin.logged) {
      sessionStorage.setItem(isLoggedIn, 'true')
      await router.push(PATH.ADMIN)
    }
  }

  return { errors, handleSubmit, loading, onSubmit, register }
}
