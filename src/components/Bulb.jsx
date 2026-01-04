import Image from "next/image";


const Bulb = () => {
  return <div className="absolute -left-32 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 w-[200px] xl:w-[260px] h-[200px]">
    <Image src={'/bulb.png'} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain" alt="bulb"/>
  </div>;
};

export default Bulb;
