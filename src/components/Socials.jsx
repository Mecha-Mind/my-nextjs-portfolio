import Link from "next/link";
// react icons
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter  } from "react-icons/ti";
import { TiSocialGithub  } from "react-icons/ti";
const Socials = () => {
  return <div className="flex gap-x-6 items-center text-2xl">
    <a aria-label="Facebook"  href={'https://facebook.com'} title={'Facebook'} rel="noopener noreferrer"  className="hover:text-accent transition-all duration-300"
    target="_blank" >
      <TiSocialFacebook/>
    </a>
    <a aria-label="Linkedin"  href={'https://www.linkedin.com/in/hani-abdallah-7g/'} title={'Linkedin'} rel="noopener noreferrer"  className="hover:text-accent transition-all duration-300"
    target="_blank" >
      <TiSocialLinkedin/>
    </a>
    <a aria-label="X"  href={'https://x.com/Hani7g'} title={'X'} rel="noopener noreferrer"  className="hover:text-accent transition-all duration-300"
    target="_blank" >
      <TiSocialTwitter />
    </a>
    <a aria-label="Github"  href={'https://github.com/Mecha-Mind'} title={'Github'} rel="noopener noreferrer"  className="hover:text-accent transition-all duration-300"
    target="_blank" >
      <TiSocialGithub />
    </a>
  </div>;
};

export default Socials;