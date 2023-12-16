import { Loader } from '@nazar-pryt/inctagram-ui-kit'

import { useGetUsersQuery } from '../api/getUsers.api.types'
import { UsersListStyled } from './UsersList.styled'

export const UsersList = () => {
  const { data, error, loading } = useGetUsersQuery({
    variables: {
      pageNumber: 1,
      searchTerm: '',
      sortBy: 'desc',
      sortDirection: 'desc',
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
