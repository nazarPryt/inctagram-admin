import { Posts } from '@/entities/postsList/ui/Posts/Posts'
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
export default function PostsPage() {
  return <Posts />
}
PostsPage.getLayout = getAuthorizedLayout
