// next image
import Image from "next/image";
// next link
import Link from "next/link";
// icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="w-[165px] h-[165px] relative flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group z-10"
      >
        <Image
          src={"/rounded-text.png"}
          width={121}
          height={128}
          alt="project rounded"
          className="w-full h-full animate-spin-slow max-w-[121px] max-h-[128px]"
        ></Image>
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;