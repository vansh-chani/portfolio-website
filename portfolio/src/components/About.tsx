import Image from "next/image";
import profile from "../assets/Profile.jpg";
import globe from "../assets/Globe.svg";
import { GithubButtonSmall, LinkedInButtonSmall, MailButtonSmall } from "./ui/Buttons";
import SideNav from "./ui/SideNav";
import ExperienceList from "./ui/ExperienceList";
import EducationCard from "./ui/EducationCard";

const experienceData = [
    {
        company: "CodeChef VIT",
        positions: ["Machine Learning Lead", "Senior Core Member", "Junior Core Member"],
        times: ["Jul 2025 - Present", "Feb 2025 - Jul 2025", "Mar 2024 - Feb 2025"],
        descriptions: [
            "Leading the Machine Learning team, overseeing projects, mentoring members, and driving innovation in AI applications.",
            "Contributed to various club activities, organized DevSOC'25, and supported the core team in decision-making processes. Developed multiple ML projects involving LLM fine-tuning, supervised and unsupervised learning, and NLP.",
            "Assisted in organizing coding competitions, served as Co-ordinator and POC for CookOff 9.0, a flagship coding competition at graVITas'24."
        ]
    },
    {
        company: "IEEE-CS VIT",
        positions: ["Senior Core Member", "Junior Core Member"],
        times: ["Nov 2024 - Feb 2025", "May 2024 - Nov 2024"],
    }
];

const educationData = [
    {
        institution: "Vellore Institute of Technology, Vellore",
        degree: "B.Tech in Computer Science with specialization in AI/ML",
        time: "Aug 2023 - May 2027",
        grade: "9.42/10.0"
    },
    {
        institution: "Police D.A.V. Public School, Ludhiana",
        degree: "12th Standard, CBSE",
        time: "Apr 2022 - May 2023",
        Percentage: "96.2%"
    },
    {
        institution: "D.A.V. Public School, Ludhiana",
        degree: "10th Standard, CBSE",
        time: "Apr 2020 - Mar 2021",
        Percentage: "91.2%"
    }
];

export default function About() {

    return (
        <section id="about" className="min-h-screen flex flex-col items-center">
            <SideNav />
            <div className="introduction flex flex-row justify-center items-start gap-30 pt-40" id="introduction_section">
                <div className="profile flex flex-col gap-5 items-center justify-center">
                    <Image src={profile} alt="Vansh's profile" className="prp w-[170px] h-[170px] rounded-[100%]" />
                    <div className="location font-lexend text-[#8f8f8f] font-light text-[16px] flex flex-row gap-2 items-center justify-center">
                        <Image src={globe} alt="" />
                        <p>Vellore, India</p>
                    </div>
                </div>
                <div className="info">
                    <h1 className="font-jetBrains-mono text-[64px] font-extrabold">Vansh Chani</h1>
                    <h2 className="font-lexend font-light text-[#8f8f8f] text-[40px]">Software Engineer</h2>
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
            <div className="experience pt-22 w-110 ml-80" id="experience_section">
                <h1 className="font-jetBrains-mono text-[36px] font-extrabold">Experience</h1>
                {experienceData.map((exp, index) => (
                    <ExperienceList key={index} Company={exp.company} Position={exp.positions} Time={exp.times} Description={exp.descriptions} />
                ))}
            </div>
            <div className="education pt-22 w-120 ml-90" id="education_section">
                <h1 className="font-jetBrains-mono text-[36px] font-extrabold">Education</h1>
                {educationData.map((edu, index) => (
                    <EducationCard key={index} Institution={edu.institution} Degree={edu.degree} Time={edu.time} Grade={edu.grade} Percentage={edu.Percentage} />
                ))}
            </div>

            <div className="h-screen"></div>
        </section>
    );
}
