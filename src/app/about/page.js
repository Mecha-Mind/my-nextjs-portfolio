// components
import Circles from "../../components/Circles";

import AboutContent from "./AboutContent";

// meta data
export const metadata = {
  title: "Hani Abdallah - About",
  description:
    "Welcome To 'my personal portfolio' Discover best techs in the whole world!",
};

const About = () => {
  return (
    <section className="h-full py-32 xl:text-left bg-primary/30 text-center">
      {/* circles */}
      <Circles />
      {/* avatar */}
      <AboutContent/>
    </section>
  );
};

export default About;
