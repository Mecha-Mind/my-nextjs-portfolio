import TestimonialContent from "./TestimonialContent";



// meta data
export const metadata = {
  title: "Hani Abdallah - Testimonials",
  description:
    "Welcome To 'my personal portfolio' Discover best techs in the whole world!",
};

const Testimonials = () => {
  return (
    <section className="h-full bg-primary/30 text-center py-32">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <TestimonialContent />
      </div>
    </section>
  );
};

export default Testimonials;
