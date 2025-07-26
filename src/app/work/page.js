// components
import WorkContent from "@/components/WorkContent";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";

// meta data
export const metadata = {
  title: "Hani Abdallah - Work",
  description:
    "Welcome To 'my personal portfolio' Discover best techs in the whole world!",
};

const Work = () => {
  return (
    <div className="h-full py-36 flex items-center bg-primary/30">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <WorkContent />
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
