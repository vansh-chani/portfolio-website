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
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vansh.chani.code@gmail.com"
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

type GithubButtonProps = {
    githubUrl: string;
};

export function ProjectGithubButton({ githubUrl }: GithubButtonProps) {
    return (
        <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 cursor-pointer bg-[#fff0] text-[#8f8f8f] py-2 px-4 w-[154px] rounded-[10px] flex items-center justify-center font-lexend font-medium text-[16px] border border-[#ffffff80] hover:bg-[#ffffff25]
        [&_.arrow]:transition-transform [&_.arrow]:duration-300
        hover:[&_.arrow]:translate-x-1 hover:[&_.arrow]:translate-y-[-2px]"
        >
            <Image src={githubLogo} alt="GitHub" className="inline-block mr-2" />
            <p>Github</p>
            <Image src={arrow} alt="Arrow" className="arrow inline-block ml-2" />
        </a>
    );
}

export function GithubButtonSmall() {
    return (
        <a
            href="https://github.com/vansh-chani"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 cursor-pointer bg-[#fff0] text-[#8f8f8f] py-1 px-3 w-[113px] rounded-[10px] flex items-center justify-center font-lexend font-medium text-[14px] border border-[#ffffff80] hover:bg-[#ffffff25]"
        >
            <Image src={githubLogo} alt="GitHub" className="inline-block mr-2 w-4" />
            <p>Github</p>
        </a>
    );
}

export function LinkedInButtonSmall() {
    return (
        <a
            href="https://www.linkedin.com/in/vansh-chani-506250285/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 cursor-pointer bg-[#fff0] text-[#8f8f8f] py-1 px-3 w-[113px] rounded-[10px] flex items-center justify-center font-lexend font-medium text-[14px] border border-[#ffffff80] hover:bg-[#ffffff25]"
        >
            <Image src={linkedinLogo} alt="LinkedIn" className="inline-block mr-2 w-4" />
            <p>LinkedIn</p>
        </a>
    );
}

export function MailButtonSmall() {
    return (
        <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vansh.chani.code@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 cursor-pointer bg-[#fff0] text-[#8f8f8f] py-1 px-3 w-[113px] rounded-[10px] flex items-center justify-center font-lexend font-medium text-[14px] border border-[#ffffff80] hover:bg-[#ffffff25]"
        >
            <Image src={mailLogo} alt="Mail" className="inline-block mr-2 w-4" />
            <p>Email</p>
        </a>
    );
}

export function CertificationsButton(CertUrlProps: { CertUrl: string }) {
     return (
        <a
            href={CertUrlProps.CertUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 cursor-pointer bg-[#fff0] text-[#8f8f8f] py-2 px-4 w-[154px] rounded-[10px] flex items-center justify-center font-lexend font-medium text-[14px] border border-[#ffffff80] hover:bg-[#ffffff25]
        [&_.arrow]:transition-transform [&_.arrow]:duration-300
        hover:[&_.arrow]:translate-x-1 hover:[&_.arrow]:translate-y-[-2px]"
        >
            <p>Certificate</p>
            <Image src={arrow} alt="Arrow" className="arrow inline-block ml-2 w-4" />
        </a>
    );
}