import { SubmitHandler, useForm } from 'react-hook-form'

import { appSettings } from '@/_app/AppSettings'
import { PATH } from '@/_app/AppSettings/PATH'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { z } from 'zod'

import { useLoginAdminMutation } from '../api/login.api.types'

const email = appSettings.AUTH_LOGIN
const password = appSettings.AUTH_PASS

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
    defaultValues: { email, password },
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
  sessionStorage.setItem(appSettings.isLoggedIn, 'true')

  const base64 = btoa(`${data.email}:${data.password}`)

  sessionStorage.setItem(appSettings.authToken, base64)
}
