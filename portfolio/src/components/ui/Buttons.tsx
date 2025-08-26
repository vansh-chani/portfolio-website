import Image from 'next/image';
import githubLogo from '../../assets/Github.svg';
import linkedinLogo from '../../assets/Linkedin.svg';
import arrow from '../../assets/ArrowUR.svg';
import discordLogo from '../../assets/Discord.svg';
import mailLogo from '../../assets/Mail.svg';

export function GitHubButton() {
    return (
        <a
            href="https://github.com/vansh-chani"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 cursor-pointer bg-[#fff0] text-[#8f8f8f] py-2 px-6 w-[154px] rounded-[10px] flex items-center justify-center font-lexend font-medium text-[16px] border border-[#ffffff80] hover:bg-[#ffffff25]
        [&_.arrow]:transition-transform [&_.arrow]:duration-300
        hover:[&_.arrow]:translate-x-1 hover:[&_.arrow]:translate-y-[-2px]"
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
        hover:[&_.arrow]:translate-x-1 hover:[&_.arrow]:translate-y-[-2px]"
        >
            <Image src={linkedinLogo} alt="LinkedIn" className="inline-block mr-2" />
            <p>LinkedIn</p>
            <Image src={arrow} alt="Arrow" className="arrow inline-block ml-2" />
        </a>
    );
}

export function DiscordButton() {
    return (
        <a
            href="https://discord.com/users/1214960309190795295"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 cursor-pointer bg-[#fff0] text-[#8f8f8f] py-2 px-4 w-[154px] rounded-[10px] flex items-center justify-center font-lexend font-medium text-[16px] border border-[#ffffff80] hover:bg-[#ffffff25]
        [&_.arrow]:transition-transform [&_.arrow]:duration-300
        hover:[&_.arrow]:translate-x-1 hover:[&_.arrow]:translate-y-[-2px]"
        >
            <Image src={discordLogo} alt="Discord" className="inline-block mr-2" />
            <p>Discord</p>
            <Image src={arrow} alt="Arrow" className="arrow inline-block ml-2" />
        </a>
    );
}

export function MailButton() {
    return (
        <a
            href="mailto:vansh.chani.code@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 cursor-pointer bg-[#fff0] text-[#8f8f8f] py-2 px-4 w-[154px] rounded-[10px] flex items-center justify-center font-lexend font-medium text-[16px] border border-[#ffffff80] hover:bg-[#ffffff25]
        [&_.arrow]:transition-transform [&_.arrow]:duration-300
        hover:[&_.arrow]:translate-x-1 hover:[&_.arrow]:translate-y-[-2px]"
        >
            <Image src={mailLogo} alt="Mail" className="inline-block mr-2" />
            <p>Email</p>
            <Image src={arrow} alt="Arrow" className="arrow inline-block ml-2" />
        </a>
    );
}
