import React, { useEffect, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import 'swiper/css/navigation';
// import "../../.."
// Import required modules
// import { FreeMode, Pagination } from "swiper"
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper"

// import { getAllCourses } from "../../services/operations/courseDetailsAPI"
import Course_Card from "./Course_Card"

function Course_Slider({ Courses }) {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          // slidesPerView={1}
          // spaceBetween={25}
          // loop={true}
          // modules={[FreeMode, Pagination]}
          // breakpoints={{
          //   1024: {
          //     slidesPerView: 3,
          //   },
          // }}
          slidesPerView={3}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          className="max-h-[30rem] mySwiper"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

export default Course_Slider
