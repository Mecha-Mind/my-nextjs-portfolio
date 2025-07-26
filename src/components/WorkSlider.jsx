// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
          url: 'https://github.com/Mecha-Mind',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          url: 'https://github.com/Mecha-Mind',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          url: 'https://github.com/Mecha-Mind',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          url: 'https://github.com/Mecha-Mind',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
          url: 'https://github.com/Mecha-Mind',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
          url: 'https://github.com/Mecha-Mind',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          url: 'https://github.com/Mecha-Mind',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          url: 'https://github.com/Mecha-Mind',
        },
      ],
    },
  ],
};

// swiper react
import { Swiper, SwiperSlide} from "swiper/react"

// swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// icons
import {
  BsArrowRight
} from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
      >
        {
          workSlides.slides.map((item, index)=>{
            return (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                  {item.images.map(({ url, path}, index) =>{
                    return(
                      <Link href={url} target="_blank" rel="noopener noreferrer" className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                        <div className="relative overflow-hidden flex items-center justify-center group">
                          {/* Images */}
                          <Image src={path} width={500} height={300} alt="projectImage" />
                          {/* overlay bg */}
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e83838] to-[#4a22bd opacity-0 group-hover:opacity-80 transition-all duration-700]"></div>
                          {/* title */}
                          <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                            <div className="flex items-center gap-x-2 tracking-[0.2em] text-[13px]">
                              <div className='delay-100'>LIVE</div>
                              <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                              {/* icon */}
                              <div>
                                <BsArrowRight className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </SwiperSlide>
            )
          })
        }
    </Swiper>
  )
};


export default WorkSlider;
