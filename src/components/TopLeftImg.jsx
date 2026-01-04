import Image from "next/image";
const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge w-[200px] lg:w-[400px] h-[200px] lg:h-[400px] opacity-50 z-0">
      <Image
        src={"/top-left-img.png"}
        alt="side image"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain"
        priority
      />
    </div>
  );
};

export default TopLeftImg;
