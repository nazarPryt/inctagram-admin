import { Skeleton } from '@nazar-pryt/inctagram-ui-kit'

import { ProfileFilesSkeletonStyled } from './ProfileFilesSkeleton.styled'

export const ProfileFilesSkeleton = () => {
  return (
    <ProfileFilesSkeletonStyled>
      <Skeleton count={4} height={270} inline width={270} />
    </ProfileFilesSkeletonStyled>
  )
}
