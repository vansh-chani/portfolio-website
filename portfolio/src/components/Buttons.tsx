import Image from 'next/image';
import githubLogo from '../assets/Github.svg';
import linkedinLogo from '../assets/Linkedin.svg';
import arrow from '../assets/ArrowUR.svg';

export function GitHubButton() {
    return (
        <a
            href="https://github.com/vansh-chani"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 cursor-pointer bg-[#fff0] text-[#8f8f8f] py-2 px-6 w-[154px] rounded-[10px] flex items-center justify-center font-lexend font-medium text-[16px] border border-[#ffffff80] hover:bg-[#ffffff25]
        [&_.arrow]:transition-transform [&_.arrow]:duration-300
        hover:[&_.arrow]:translate-x-1"
        >
            <Image src={githubLogo} alt="GitHub" className="inline-block mr-2" />
            <p>Github</p>
            <Image src={arrow} alt="Arrow" className="arrow inline-block ml-2" />
        </a>
    );
}

export function LinkedInButton() {
    return (
        <a
            href="https://www.linkedin.com/in/vansh-chani-506250285/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 cursor-pointer bg-[#fff0] text-[#8f8f8f] py-2 px-4 w-[154px] rounded-[10px] flex items-center justify-center font-lexend font-medium text-[16px] border border-[#ffffff80] hover:bg-[#ffffff25]
        [&_.arrow]:transition-transform [&_.arrow]:duration-300
        hover:[&_.arrow]:translate-x-1"
        >
            <Image src={linkedinLogo} alt="LinkedIn" className="inline-block mr-2" />
            <p>LinkedIn</p>
            <Image src={arrow} alt="Arrow" className="arrow inline-block ml-2" />
        </a>
    );
}