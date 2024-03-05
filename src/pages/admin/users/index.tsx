import { UsersList } from '@/entities/usersList/ui/UsersList/UsersList'
import { getAuthorizedLayout } from '@/shared/layouts/Authorized'
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
export default function UsersListPage() {
  return <UsersList />
}
UsersListPage.getLayout = getAuthorizedLayout
