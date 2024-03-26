import InfiniteScroll from 'react-infinite-scroll-component'

import { useGetAllPosts } from '@/entities/postsList/hook/useGetAllPosts'
import { PostsStyled } from '@/entities/postsList/ui/Posts/Posts.styled'
import { PostsList } from '@/entities/postsList/ui/PostsList/PostsList'
import { PostsListSkeleton } from '@/entities/postsList/ui/PostsListSkeleton'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { ScrollToTop } from '@/shared/ui/ScrollToTop/ScrollToTop'
import { InputText, Skeleton } from '@nazar-pryt/inctagram-ui-kit'

export const Posts = () => {
  const { fetchMoreData, hasMore, isHavePosts, loading, posts } = useGetAllPosts()
  const { t } = useTranslation()

  if (loading) {
    return <PostsListSkeleton />
  }

  if (isHavePosts) {
    return (
      <PostsStyled>
        <InputText search />
        <InfiniteScroll
          dataLength={posts.length}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>{t.post.end_post}</b>
            </p>
          }
          hasMore={hasMore}
          loader={<PostsListSkeleton />}
          next={fetchMoreData}
        >
          <PostsList posts={posts} />
        </InfiniteScroll>
        <ScrollToTop />
      </PostsStyled>
    )
  }

  return <div>{t.post.no_posts}</div>
}
