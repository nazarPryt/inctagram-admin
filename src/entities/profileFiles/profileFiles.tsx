import InfiniteScroll from 'react-infinite-scroll-component'

import { IsEmpty } from '@/shared/components/IsEmpty'
import { ScrollToTop } from '@/shared/components/ScrollToTop'
import { Skeleton } from '@nazar-pryt/inctagram-ui-kit'

import { useProfileFiles } from './hook/useProfileFiles'
import { ProfileFilesStyled } from './profileFiles.styled'
import { ProfileFileItem } from './ui/ProfileFileItem'

export const ProfileFiles = ({ userId }: { userId: number }) => {
  const { data, fetchMoreData, hasMore, isHavePosts, loading } = useProfileFiles({ userId })

  if (loading) {
    return <div>isLoading...</div>
  }

  if (isHavePosts) {
    return (
      <ProfileFilesStyled>
        <InfiniteScroll
          // @ts-ignore
          dataLength={data?.getPostsByUser.items.length}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          hasMore={hasMore}
          loader={<Skeleton height={300} width={300} />}
          // loader={<HomePostSkeleton />}
          next={fetchMoreData}
        >
          {data.getPostsByUser.items.map((post, index) => (
            <ProfileFileItem key={index} post={post} />
          ))}
        </InfiniteScroll>
        <ScrollToTop />
      </ProfileFilesStyled>
    )
  }

  return <IsEmpty text={'Files is empty'} />
}
