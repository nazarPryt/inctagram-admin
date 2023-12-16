import { LoginForm } from '@/features/auth/login/ui/LoginForm'
import { getUnAuthorizedLayout } from '@/shared/layouts/UnAuthorized'

export default function LoginPage() {
  return <LoginForm />
}
LoginPage.getLayout = getUnAuthorizedLayout
