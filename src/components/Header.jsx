import Link from "next/link";
// icons
import Socials from './Socials'
const Header = () => {
  return (<header className="absolute w-full z-30 flex items-center px-16 lg:px-0 xl:h-[90px]  text-center">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row gap-y-6 py-6 justify-between items-center">
                {/* logo */}
                <Link href={'/'} className="text-3xl">
                  hani
                  <span className="text-white/70"> abdallah</span>
                  <span className="text-accent">.</span>
                  </Link>
                {/* social icons */}
                <Socials />
              </div>
            </div>
          </header>)};

export default Header;
