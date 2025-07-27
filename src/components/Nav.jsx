"use client";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

// next link
import Link from "next/link";

// next router
import { usePathname } from 'next/navigation';
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col items-center lg:justify-center fixed h-max z-50 w-full lg:right-[2%] mt-auto lg:w-16 bottom-0 lg:max-w-md lg:h-screen">
      {/* {inner} */}
      <div className="flex items-center justify-between lg:flex-col gap-y-10 w-full px-6 xl:px-0 bg-white/10 h-[80px] text-3xl lg:text-xl lg:py-8 lg:h-max backdrop-blur-sm lg:rounded-full">
        {navData.map((navLink, index) => {
          return (
            <Link
              href={navLink.path}
              key={index}
              className={`${
                navLink.path === pathname && "text-accent"
              } relative flex group items-center hover:text-accent/70 transition-all duration-300`}
            >
              {/* tooltip */}
              <div className="absolute hidden right-0 pr-16 lg:group-hover:flex">
                <div className="bg-white relative flex items-center text-primary p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none capitalize font-semibold">
                    {navLink.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent absolute -right-2 border-y-[6px] border-r-0"></div>
                </div>
              </div>
              {/* icon */}
              <div>{navLink.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
