import { useTranslation } from '@/shared/hooks/useTranslation'

export const useProfileInfoTableTitle = () => {
  const { t } = useTranslation()

  return [
    { title: t.table.uploaded_files, value: 'UploadedFiles' },
    { title: t.table.payments, value: 'Payments' },
    { title: t.table.followers, value: 'Followers' },
    { title: t.table.following, value: 'Following' },
  ]
}
