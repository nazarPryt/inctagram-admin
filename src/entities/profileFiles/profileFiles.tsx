import InfiniteScroll from 'react-infinite-scroll-component'

import { IsEmpty } from '@/shared/components/IsEmpty'
import { ScrollToTop } from '@/shared/components/ScrollToTop'

import { useProfileFiles } from './hook/useProfileFiles'
import { ProfileFilesStyled } from './profileFiles.styled'
import { ProfileFilesList } from './ui/ProfileFilesList'
import { ProfileFilesSkeleton } from './ui/ProfileFilesSkeleton'

export const ProfileFiles = ({ userId }: { userId: number }) => {
  const { fetchMoreData, hasMore, isHavePosts, loading, posts } = useProfileFiles({ userId })

  if (loading) {
    return <ProfileFilesSkeleton />
  }

  if (isHavePosts) {
    return (
      <ProfileFilesStyled>
        <InfiniteScroll
          dataLength={posts.length}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>This is all</b>
            </p>
          }
          hasMore={hasMore}
          loader={<ProfileFilesSkeleton />}
          next={fetchMoreData}
        >
          <ProfileFilesList posts={posts} />
        </InfiniteScroll>
        <ScrollToTop />
      </ProfileFilesStyled>
    )
  }

  return <IsEmpty text={'Files is empty'} />
}
