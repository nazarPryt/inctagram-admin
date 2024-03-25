import { GetPostsByUserQuery } from '@/entities/profileFiles/api/getPostsByUser.api.types'
import Image from 'next/image'

import { ProfileFilesListStyled } from './ProfileFilesListStyled'

type PropsType = {
  posts: GetPostsByUserQuery['getPostsByUser']['items']
}
export const ProfileFilesList = ({ posts }: PropsType) => {
  return (
    <ProfileFilesListStyled>
      {posts &&
        posts.map((post, index) => {
          if (post.url) {
            return <Image alt={'post'} height={300} key={index} src={post.url} width={300} />
          }
        })}
    </ProfileFilesListStyled>
  )
}
