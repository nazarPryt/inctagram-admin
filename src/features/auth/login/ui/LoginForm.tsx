import { LoginFormStyled } from '@/features/auth/login/ui/LoginForm.styled'
import { Button, InputPassword, InputText } from '@nazar-pryt/inctagram-ui-kit'

export const LoginForm = () => {
  return (
    <LoginFormStyled>
      <h1>Sign In</h1>
      <InputText type={'email'} />
      <InputPassword />
      <Button fullwidth>Sign In</Button>
    </LoginFormStyled>
  )
}
