import { useLogin } from '@/features/auth/login/hook/useLogin'
import { LoginFormStyled } from '@/features/auth/login/ui/LoginForm.styled'
import { useTranslation } from '@/shared/hooks/useTranslation'
import {
  AuthContainer,
  Button,
  InputPassword,
  InputText,
  Loader,
} from '@nazar-pryt/inctagram-ui-kit'

export const LoginForm = () => {
  const { errors, handleSubmit, loading, onSubmit, register } = useLogin()
  const { t } = useTranslation()

  return (
    <AuthContainer>
      <LoginFormStyled onSubmit={handleSubmit(onSubmit)}>
        {loading && <Loader fullScreen />}
        <h1>{t.login.sign_in}</h1>
        <InputText
          {...register('email')}
          error={errors.email?.message}
          label={t.login.email}
          type={'email'}
        />
        <InputPassword
          {...register('password')}
          error={errors.password?.message}
          label={t.login.password}
        />
        <Button disabled={loading} fullwidth type={'submit'}>
          {t.login.sign_in}
        </Button>
      </LoginFormStyled>
    </AuthContainer>
  )
}
