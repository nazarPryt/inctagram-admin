import { Loader } from '@nazar-pryt/inctagram-ui-kit'

import { useRemoveUserMutation } from '../api/removeUser.api.types'
import { RemoveUserStyled } from './RemoveUser.styled'

export const RemoveUser = () => {
  const [removeUserMutation, { data, error, loading }] = useRemoveUserMutation({
    variables: {
      userId: 13,
    },
  })

  const handleRemove = async () => {
    await removeUserMutation()
  }

  if (loading) {
    return <Loader />
  }
  if (error) {
    return error.message
  }

  return (
    <RemoveUserStyled disabled={loading} onClick={handleRemove}>
      remove
    </RemoveUserStyled>
  )
}
