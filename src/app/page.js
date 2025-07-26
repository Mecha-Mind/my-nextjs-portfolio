// components
import HomeContent from "@/components/HomeContent";

// meta data
export const metadata = {
  title: "Hani Abdallah - Home",
  description:
    "Welcome To 'my personal portfolio' Discover best techs in the whole world!",
};

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <HomeContent />
    </div>
  );
};

export default Home;
