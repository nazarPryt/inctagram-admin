import { getUnAuthorizedLayout } from '@/_app/layouts/UnAuthorized'
import { LoginForm } from '@/features/auth/login/ui/LoginForm'

export default function LoginPage() {
  return <LoginForm />
}
LoginPage.getLayout = getUnAuthorizedLayout
