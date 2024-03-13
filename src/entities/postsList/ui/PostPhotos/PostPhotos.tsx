import { GetPostsQuery } from '@/entities/postsList/api/getPosts.api.types'
import { PostPhotosStyled } from '@/entities/postsList/ui/PostPhotos/PostPhotos.styled'
import Image from 'next/image'
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type PostItemType = {
  photos: GetPostsQuery['getPosts']['items'][number]['images']
}
export const PostPhotos = ({ photos }: PostItemType) => {
  return (
    <PostPhotosStyled>
      <Swiper
        className={'swiperWrapper'}
        keyboard
        modules={[Navigation, Pagination, Autoplay, A11y, Keyboard]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        spaceBetween={0}
      >
        {photos &&
          photos.map((photo, index) => {
            if (photo.height === 1440) {
              return (
                <SwiperSlide className={'slide'} key={index}>
                  <Image
                    alt={'Picture of the author'}
                    height={photo.height}
                    src={photo.url || ''}
                    width={photo.width || 20}
                  />
                </SwiperSlide>
              )
            }
          })}
      </Swiper>
    </PostPhotosStyled>
  )
}
