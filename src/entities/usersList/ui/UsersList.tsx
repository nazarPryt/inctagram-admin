import { useGetUsersListQuery } from '@/entities/usersList/api/getUsers.api.types'
import { Loader } from '@nazar-pryt/inctagram-ui-kit'

import { UsersListStyled } from './UsersList.styled'

export const UsersList = () => {
  const { data, error, loading } = useGetUsersListQuery({
    variables: {
      pageNumber: 1,
      pageSize: 10,
      searchTerm: '',
      sortBy: 'desc',
      // sortDirection: 'desc',
    },
  })

  console.log('data: ', data)
  if (loading) {
    return <Loader />
  }
  if (error) {
    return `Error! ${error.message}`
  }

  return <UsersListStyled>dfd</UsersListStyled>
}
