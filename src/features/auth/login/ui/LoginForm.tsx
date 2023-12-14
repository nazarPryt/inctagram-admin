import { useLogin } from '@/features/auth/login/hook/useLogin'
import { LoginFormStyled } from '@/features/auth/login/ui/LoginForm.styled'
import {
  AuthContainer,
  Button,
  InputPassword,
  InputText,
  Loader,
} from '@nazar-pryt/inctagram-ui-kit'

export const LoginForm = () => {
  const { errors, handleSubmit, loading, onSubmit, register } = useLogin()

  return (
    <AuthContainer>
      <LoginFormStyled onSubmit={handleSubmit(onSubmit)}>
        {loading && <Loader />}
        <h1>Sign In</h1>
        <InputText
          {...register('email')}
          error={errors.email?.message}
          label={'Email'}
          type={'email'}
        />
        <InputPassword
          {...register('password')}
          error={errors.password?.message}
          label={'Password'}
        />
        <Button disabled={loading} fullwidth type={'submit'}>
          Sign In
        </Button>
      </LoginFormStyled>
    </AuthContainer>
  )
}
