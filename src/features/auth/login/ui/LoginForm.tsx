import { LoginFormStyled } from '@/features/auth/login/ui/LoginForm.styled'
import { AuthContainer, Button, InputPassword, InputText } from '@nazar-pryt/inctagram-ui-kit'

import { useLoginAdminMutation } from '../api/login.generated'

export const LoginForm = () => {
  const [loginAdminMutation, { data, error, loading }] = useLoginAdminMutation()

  const handleSubmit = async () => {
    await loginAdminMutation({ variables: { email: 'admin@gmail.com', password: 'admin' } })
  }

  if (loading) {
    return 'Submitting...'
  }
  if (error) {
    return `Submission error! ${error.message}`
  }

  return (
    <AuthContainer>
      <LoginFormStyled onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <InputText defaultValue={'admin@gmail.com'} label={'Email'} type={'email'} />
        <InputPassword defaultValue={'admin'} label={'Password'} />
        <Button fullwidth type={'submit'}>
          Sign In
        </Button>
      </LoginFormStyled>
    </AuthContainer>
  )
}
