import ContactContent from "./ContactContent";

// meta data
export const metadata = {
  title: "Hani Abdallah - Contact",
  description:
    "Welcome To 'my personal portfolio' Discover best techs in the whole world!",
};

const Contact = () => {
  return (
    <section className="h-full bg-primary/30">
      <div className="container mx-auto py-32 h-full flex items-center justify-center">
        {/* text & form */}
        <div className="flex flex-col items-center w-full max-w-[700px]">
          <ContactContent />
        </div>
      </div>
    </section>
  );
};

export default Contact;
