// app/projects/[id]/ProjectCarousel.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ProjectCarousel({ images }: { images: string[] }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mb-8 rounded-xl overflow-hidden shadow-md"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img 
            src={image} 
            alt={`Project Screenshot ${index + 1}`} 
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
