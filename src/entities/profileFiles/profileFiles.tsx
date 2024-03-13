import { ProfileFilesStyled } from './profileFiles.styled'
import { ProfileFilesList } from './ui/ProfileFilesList'

export const ProfileFiles = ({ userID }: { userID: number }) => {
  return (
    <ProfileFilesStyled>
      <ProfileFilesList />
    </ProfileFilesStyled>
  )
}
