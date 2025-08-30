import Image from "next/image";
import profile from "../assets/Profile.jpg";
import globe from "../assets/Globe.svg";
import { GithubButtonSmall, LinkedInButtonSmall, MailButtonSmall } from "./ui/Buttons";
import SideNav from "./ui/SideNav";

export default function About() {
    
    return (
        <section id="about" className="min-h-screen flex flex-col items-center">
            <SideNav />
            <div className="introduction flex flex-row justify-center items-start gap-30 pt-40" id = "introduction_section">
                <div className="profile flex flex-col gap-5 items-center justify-center">
                    <Image src={profile} alt="Vansh's profile" className="prp w-[170px] h-[170px] rounded-[100%]" />
                    <div className="location font-lexend text-[#8f8f8f] font-light text-[16px] flex flex-row gap-2 items-center justify-center">
                        <Image src={globe} alt="" />
                        <p>Vellore, India</p>
                    </div>
                </div>
                <div className="info">
                    <h1 className="font-jetBrains-mono text-[64px] font-extrabold">Vansh Chani</h1>
                    <h2 className="font-lexend font-light text-[#8f8f8f] text-[40px]">Software engineer</h2>
                    <div className="buttons flex flex-row gap-4">
                        <GithubButtonSmall />
                        <LinkedInButtonSmall />
                        <MailButtonSmall />
                    </div>
                </div>
            </div>
            <div className="description mt-12 w-110 ml-80">
                <p className="font-lexend text-white font-normal text-[20px]">
                    I’m a software developer passionate about AI and machine learning. I design and implement data-driven algorithms and intelligent systems that adapt, optimize performance, and deliver real-world impact.
                </p>
            </div>
            <div className="experience pt-22     w-110 ml-80" id = "experience_section">
                <h1 className="font-jetBrains-mono text-[36px] font-extrabold">Experience</h1>
            </div>
            <div className="h-screen"></div>
        </section>
    );
}
