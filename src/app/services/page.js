// components
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";


import ServiceContent from "./ServiceContent";

// meta data
export const metadata = {
  title: "Hani Abdallah - Services",
  description:
    "Welcome To 'my personal portfolio' Discover best techs in the whole world!",
};

const Services = () => {
  return (
    <section className="h-full py-36 flex items-center bg-primary/30">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <ServiceContent />
        </div>
      </div>
      <Bulb />
    </section>
  );
};

export default Services;
