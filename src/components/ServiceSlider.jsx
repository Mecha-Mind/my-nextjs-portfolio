"use client"
// swiper react
import { Swiper, SwiperSlide} from "swiper/react"

// swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Frontend Development',
    description:
      'Building modern, responsive web applications using React, Next.js, and Tailwind with clean architecture and scalable structure.',
  },
  {
    icon: <RxCrop />,
    title: 'Landing Pages',
    description:
      'High-converting landing pages with pixel-perfect layouts, smooth interactions, and optimized performance.',
  },
  {
    icon: <RxPencil2 />,
    title: 'UI Implementation',
    description:
      'Transforming design systems and Figma files into clean, reusable, and maintainable components.',
  },
  {
    icon: <RxRocket />,
    title: 'Performance Optimization',
    description:
      'Improving loading speed, accessibility, and SEO through optimized assets and best frontend practices.',
  },
  {
    icon: <RxReader />,
    title: 'Web App Interfaces',
    description:
      'Interactive dashboards, e-commerce systems, and dynamic interfaces with strong state management.',
  },
];


const ServiceSlider = () => {
  return (
    <Swiper 
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
      >
        {
          serviceData.map((item, index)=>{
            return (
              <SwiperSlide key={index}>
                <div className="h-max bg-[rgba(65,47,123,0.15)] px-6 py-8 rounded-lg flex sm:flex-col sm:gap-x-0 gap-x-6 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                  {/* icon */}
                  <div className="text-4xl text-accent mb-4">{item.icon}</div>
                  {/* title & desc */}
                  <div className="mb-8">
                    <h3 className="mb-2 text-lg">{item.title}</h3>
                    <p className="max-w-[350px] leading-normal">{item.description}</p>
                  </div>
                  {/* arrow */}
                  <div className="text-3xl">
                    <RxArrowTopRight className="group-hover:text-accent group-hover:rotate-45 transition-all duration-300"/>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
    </Swiper>
  )
};

export default ServiceSlider;
