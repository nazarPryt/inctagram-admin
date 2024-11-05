import { useTranslation } from '@/shared/hooks/useTranslation'
import { AddIcon, Favorites, PaymentIcon, PostsIcon, TabType } from '@nazar-pryt/inctagram-ui-kit'

export const useProfileInfoTableTitle = (): TabType[] => {
  const { t } = useTranslation()

  return [
    { icon: <PostsIcon />, title: t.table.uploaded_files, value: 'UploadedFiles' },
    { icon: <PaymentIcon />, title: t.table.payments, value: 'Payments' },
    { icon: <Favorites />, title: t.table.followers, value: 'Followers' },
    { icon: <AddIcon />, title: t.table.following, value: 'Following' },
  ]
}
