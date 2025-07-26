// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Omar F.',
    position: 'Entrepreneur',
    message:
      'The site Hani built with Next.js exceeded our expectations. The performance was top-notch, and the code was clean. Great to work with!'
  },
  {
    image: '/t-avt-2.png',
    name: 'Sara M.',
    position: 'Owner of a Small Business',
    message:
      'Hani’s work on our website was outstanding! His use of React made it fast and interactive. Highly recommend him for any front-end project!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Ahmed Khaled',
    position: 'Marketing Manager',
    message:
      'Hani turned our idea into a stunning website using JavaScript and modern tools. His dedication made the process smooth and enjoyable!'
      ,
  },
];

// swiper react
import { Swiper, SwiperSlide} from "swiper/react"

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

// icons
import {
  FaQuoteLeft
} from "react-icons/fa";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper 
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
      >
        {
          testimonialData.map(({image, name, position, message}, index)=>{
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row gap-x-8 h-full px-16 items-center">
                  {/* avatar, name, position */}
                  <div className="w-full max-w-[300px] relative flex items-center flex-col xl:justify-center mx-auto xl:mx-0">
                      <div className="flex flex-col items-center justify-center">
                        {/* avatar */}
                        <div className="mb-2">
                          <Image src={image} alt="avatar" width={100} height={100}></Image>
                        </div>
                        {/* name */}
                        <div className="text-lg">{name}</div>
                        {/* position */}
                        <div className="text-[12px] uppercase font-extralight tracking-widest">{position}</div>
                      </div>
                  </div>
                  {/* quote & message */}
                  <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:before:bg-white/20 xl:pl-20">
                    {/* icon */}
                    <div className="mb-4">
                      <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"/>
                    </div>
                    {/* message */}
                    <div className="text-center md:text-left xl:text-lg">
                      {message}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
    </Swiper>
  )
};


export default TestimonialSlider;
