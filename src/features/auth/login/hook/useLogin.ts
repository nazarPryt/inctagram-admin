import { SubmitHandler, useForm } from 'react-hook-form'

import { authToken, isLoggedIn } from '@/shared/constants'
import { PATH } from '@/shared/constants/PATH'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { z } from 'zod'

import { useLoginAdminMutation } from '../api/login.api.types'

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
      saveAuthToken(data)
      await router.push(PATH.USERS)
    }
  }

  return { errors, handleSubmit, loading, onSubmit, register }
}
export const saveAuthToken = (data: loginAdminSchemaType) => {
  sessionStorage.setItem(isLoggedIn, 'true')

  const base64 = btoa(`${data.email}:${data.password}`)

  sessionStorage.setItem(authToken, base64)
}
