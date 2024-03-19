import InfiniteScroll from 'react-infinite-scroll-component'

import { useGetAllPosts } from '@/entities/postsList/hook/useGetAllPosts'
import { PostsStyled } from '@/entities/postsList/ui/Posts/Posts.styled'
import { PostsList } from '@/entities/postsList/ui/PostsList/PostsList'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { ScrollToTop } from '@/shared/ui/ScrollToTop/ScrollToTop'
import { InputText, Skeleton } from '@nazar-pryt/inctagram-ui-kit'

export const Posts = () => {
  const { data, fetchMoreData, hasMore, isHavePosts, loading } = useGetAllPosts()
  const { t } = useTranslation()

  if (isHavePosts) {
    return (
      <PostsStyled>
        <InputText search />
        <InfiniteScroll
          dataLength={data!.getPosts.totalCount || 0}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>{t.post.end_post}</b>
            </p>
          }
          hasMore={hasMore}
          loader={
            <div style={{ display: 'flex' }}>
              <Skeleton count={1} height={220} width={230} />
              <Skeleton count={1} height={220} width={230} />
              <Skeleton count={1} height={220} width={230} />
              <Skeleton count={1} height={220} width={230} />
            </div>
          }
          next={fetchMoreData}
          scrollThreshold={'20px'}
        >
          <PostsList loading={loading} posts={data?.getPosts.items} />
        </InfiniteScroll>
        <ScrollToTop />
      </PostsStyled>
    )
  }

  return <div>{t.post.no_posts}</div>
}
