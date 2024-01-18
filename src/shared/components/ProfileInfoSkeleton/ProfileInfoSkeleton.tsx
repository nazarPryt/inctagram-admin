import { ProfileInfoSkeletonStyled } from '@/shared/components/ProfileInfoSkeleton/ProfileInfoSkeleton.styled'
import { Skeleton } from '@nazar-pryt/inctagram-ui-kit'

export const ProfileInfoSkeleton = () => {
  return (
    <ProfileInfoSkeletonStyled>
      <div className={'avatarGroup'}>
        <Skeleton circle height={60} width={60} />
        <div className={'nameBox'}>
          <div>
            <Skeleton height={30} inline width={70} />
            <Skeleton height={30} inline width={70} />
          </div>
          <Skeleton height={20} width={150} />
        </div>
      </div>
      <div className={'bottomGroup'}>
        <div>
          <div className={'blurText'}>UserID</div>
          <div className={'importantText'}>
            <Skeleton height={20} width={120} />
          </div>
        </div>
        <div>
          <div className={'blurText'}>Profile Creation Date</div>
          <div className={'importantText'}>
            <Skeleton height={20} width={80} />
          </div>
        </div>
      </div>
    </ProfileInfoSkeletonStyled>
  )
}
