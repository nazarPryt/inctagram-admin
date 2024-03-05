import { LoginForm } from '@/features/auth/login/ui/LoginForm'
import { getUnAuthorizedLayout } from '@/shared/layouts/UnAuthorized'
import { GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { locale } = context

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}
export default function LoginPage() {
  return <LoginForm />
}
LoginPage.getLayout = getUnAuthorizedLayout
