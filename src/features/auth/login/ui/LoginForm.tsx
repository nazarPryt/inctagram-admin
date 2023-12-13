import { LoginFormStyled } from '@/features/auth/login/ui/LoginForm.styled'
import { AuthContainer, Button, InputPassword, InputText } from '@nazar-pryt/inctagram-ui-kit'

export const LoginForm = () => {
  return (
    <AuthContainer>
      <LoginFormStyled>
        <h1>Sign In</h1>
        <InputText label={'Email'} type={'email'} />
        <InputPassword label={'Password'} />
        <Button fullwidth type={'submit'}>
          Sign In
        </Button>
      </LoginFormStyled>
    </AuthContainer>
  )
}
