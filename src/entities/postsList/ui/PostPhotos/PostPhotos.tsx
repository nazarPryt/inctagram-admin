import { PostPhotosStyled } from '@/entities/postsList/ui/PostPhotos/PostPhotos.styled'
import Image from 'next/image'
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

type PostItemType = {
  photos: any
}
export const PostPhotos = ({}: PostItemType) => {
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
        <SwiperSlide className={'slide'}>
          <Image
            alt={'Picture of the author'}
            height={200}
            src={'https://picsum.photos/200/300'}
            width={200}
          />
        </SwiperSlide>
        <SwiperSlide className={'slide'}>
          <Image
            alt={'Picture of the author'}
            height={200}
            src={'https://picsum.photos/200/300'}
            width={200}
          />
        </SwiperSlide>
        <SwiperSlide className={'slide'}>
          <Image
            alt={'Picture of the author'}
            height={200}
            src={'https://picsum.photos/200/300'}
            width={200}
          />
        </SwiperSlide>
        <SwiperSlide className={'slide'}>
          <Image
            alt={'Picture of the author'}
            height={200}
            src={'https://picsum.photos/200/300'}
            width={200}
          />
        </SwiperSlide>
      </Swiper>
    </PostPhotosStyled>
  )
}
