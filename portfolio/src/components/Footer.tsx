import Image from "next/image";
import GithubLogo from "../assets/Github.svg";
import LinkedInLogo from "../assets/Linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer flex flex-row justify-around items-center border-t-2 border-t-white/30 py-6">
      <p className="footer-content font-lexend text-[20px] text-white/50 bottom-0">© Copyright - 2025<span className="text-white"> &middot; Vansh Chani</span></p>
      <div className="socials flex">
        <a href="https://github.com/vansh-chani" target="_blank" rel="noopener noreferrer">
          <Image src={GithubLogo} alt="GitHub Logo" className="w-6 h-6 mx-2" />
        </a>
        <a href="https://www.linkedin.com/in/vansh-chani-506250285/" target="_blank" rel="noopener noreferrer">
          <Image src={LinkedInLogo} alt="LinkedIn Logo" className="w-6 h-6 mx-2" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
