import { useTranslation } from '@/shared/hooks/useTranslation'
import { TableHeadColumnType } from '@nazar-pryt/inctagram-ui-kit'

export const useUsersListTableHeader = () => {
  const { t } = useTranslation()
  const tableHeader: TableHeadColumnType[] = [
    {
      key: '',
      sortable: false,
      title: '',
    },
    {
      key: 'id',
      sortable: true,
      title: t.table.user_id,
    },
    {
      key: 'username',
      sortable: true,
      title: t.table.user_name,
    },
    {
      key: 'profile-link',
      sortable: true,
      title: t.table.profile_link,
    },
    {
      key: 'createdBy',
      sortable: true,
      title: t.table.added,
    },
    {
      key: '',
      sortable: false,
      title: '',
    },
  ]

  return tableHeader
}
