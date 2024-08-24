import React from 'react'
import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
// import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';



function Container() {
  return (
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-96 bg-blue-300 mb-4 mx-20 animate__animated animate__fadeInUp">
        <SwiperSlide className='relative w-4/5 '>
            <img src="./public/photo.jpg" alt="" className='h-96 w-full' />
            <div className="absolute top-0">
              <div className='text-gray-500 font-bolder text-6xl'>movie name</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
  
  )
}

export default Container
