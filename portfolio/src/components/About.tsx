import Image from "next/image";
import profile from "../assets/Profile.jpg";
import globe from "../assets/Globe.svg";
import { GithubButtonSmall, LinkedInButtonSmall, MailButtonSmall } from "./ui/Buttons";
import SideNav from "./ui/SideNav";
import ExperienceList from "./ui/ExperienceList";
import EducationCard from "./ui/EducationCard";
import TechSkillsCard from "./ui/TechSkillsCard";
import CertificationCard from "./ui/CertificationCard";
import { useEffect, useState } from "react";

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
        grade: "9.42 / 10.0"
    },
    {
        institution: "Police D.A.V. Public School, Ludhiana",
        degree: "12th Standard, CBSE",
        time: "Apr 2022 - May 2023",
        Percentage: "96.2 %"
    },
    {
        institution: "D.A.V. Public School, Ludhiana",
        degree: "10th Standard, CBSE",
        time: "Apr 2020 - Mar 2021",
        Percentage: "91.2 %"
    }
];

const techSkillsData = [
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "Python", "HTML", "CSS", "JavaScript", "TypeScript", "SQL"]
    },
    {
        title: "Frameworks & Libraries",
        skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "TensorFlow", "Langchain", "FastAPI", "React", "Next.js", "Tailwind CSS"]
    },
    {
        title: "Tools",
        skills: ["Git", "VS Code", "GitHub", "Google Colab", "IntelliJ IDEA", "Jupyter Notebook", "Postman"]
    }
];

const certificationsData = [
    {
        Title: "Oracle OCI 2025 Generative AI Professional (1Z0-1127-25)",
        Issuer: "Oracle University",
        Year: "2025 - 27",
        CertUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=2F74B7CBB5EC27F433D29D5FADF4F996A8B987723B9DD1ACF9567BEEED08CB69"
    },
    {
        Title: "Oracle OCI 2025 Certified AI Foundations Associate (1Z0-1122-25)",
        Issuer: "Oracle University",
        Year: "2025 - 27",
        CertUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=EDF2A3BD2E393192C0A6E2CD3EC42546F6545F0DB35C4E65606AF84E1D767BFD"
    },
    {
        Title: "Supervised Machine Learning: Regression and Classification",
        Issuer: "DeepLearning.AI, Stanford Online",
        Year: "2024",
        CertUrl: "https://www.coursera.org/account/accomplishments/verify/NKWZ2F90781S?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    }
];

export function AboutMobile(){
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                } else {
                    entry.target.classList.remove("fade-in");
                }
            });
        },
        {
            root: null,
            threshold: 0.1,
            rootMargin: "0px 0px -10% 0px",
        });

        document.querySelectorAll(".introduction, .desc-about, .description, .experience, .education, .techSkills, .certifications").forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);


    return (
        <section id="about" className="min-h-screen flex flex-col items-center">
            <div className="introduction flex flex-col justify-center items-center gap-10 pt-20 opacity-0" id="introduction_section">
                <div className="profile flex flex-col gap-5 items-center justify-center">
                    <Image src={profile} alt="Vansh's profile" className="prp w-[170px] h-[170px] rounded-[100%]" />
                    <div className="location font-lexend text-[#8f8f8f] font-light text-[16px] flex flex-row gap-2 items-center justify-center">
                        <Image src={globe} alt="" />
                        <p>Vellore, India</p>
                    </div>
                </div>
                <div className="info">
                    <h1 className="font-jetBrains-mono text-[48px] text-center font-extrabold">Vansh Chani</h1>
                    <h2 className="font-lexend font-light text-[#8f8f8f] text-center text-[32px]">Software Engineer</h2>
                    <div className="buttons flex flex-row flex-wrap gap-4 px-4 justify-center">
                        <GithubButtonSmall />
                        <LinkedInButtonSmall />
                        <MailButtonSmall />
                    </div>
                </div>
            </div>
            <div className="desc-about mt-12 max-w-110  opacity-0">
                <p className="font-lexend text-white font-normal text-[18px] px-4">
                    I&apos;m a software developer passionate about AI and machine learning. I design and implement data-driven algorithms and intelligent systems that adapt, optimize performance, and deliver real-world impact.
                </p>
            </div>
            <div className="experience pt-22 max-w-110 opacity-0 px-4" id="experience_section">
                <h1 className="font-jetBrains-mono text-[36px] font-extrabold">Experience</h1>
                {experienceData.map((exp, index) => (
                    <ExperienceList key={index} Company={exp.company} Position={exp.positions} Time={exp.times} Description={exp.descriptions} />
                ))}
            </div>
            <div className="education pt-22 max-w-110 opacity-0 px-4" id="education_section">
                <h1 className="font-jetBrains-mono text-[36px] font-extrabold">Education</h1>
                {educationData.map((edu, index) => (
                    <EducationCard key={index} Institution={edu.institution} Degree={edu.degree} Time={edu.time} Grade={edu.grade} Percentage={edu.Percentage} />
                ))}
            </div>
            <div className="techSkills pt-22 max-w-110 opacity-0 px-4" id="techSkills_section">
                <h1 className="font-jetBrains-mono text-[36px] font-extrabold">Technical Skills</h1>
                {techSkillsData.map((tech, index) => (
                    <TechSkillsCard key={index} Title={tech.title} Skills={tech.skills} />
                ))}
            </div>
            <div className="certifications pt-22 max-w-110 mb-20 opacity-0 px-4" id="certifications_section">
                <h1 className="font-jetBrains-mono text-[36px] font-extrabold">Certifications</h1>
                {certificationsData.map((cert, index) => (
                    <CertificationCard key={index} Title={cert.Title} Issuer={cert.Issuer} Year={cert.Year} CertUrl={cert.CertUrl} />
                ))}
            </div>

        </section>
    );
}

export default function About() {
    const [view, setview] = useState("introduction_section");

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                } else {
                    entry.target.classList.remove("fade-in");
                }
            });
        },
        {
            root: null,
            threshold: 0.1,
            rootMargin: "0px 0px -10% 0px",
        });

        document.querySelectorAll(".introduction, .desc-about, .description, .experience, .education, .techSkills, .certifications").forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        const observerView = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log(entry.target.id);
                        setview(entry.target.id);
                    }
                });
            },
            {
                root: null,
                threshold: 0.2,
                rootMargin: "-10% 0px -50% 0px",
            }
        );
        const sectionList = ["introduction_section", "experience_section", "education_section", "techSkills_section", "certifications_section"];
        sectionList.forEach(sec => {
            const element = document.querySelector(`#${sec}`);
            if (element) {
                observerView.observe(element);
            }

        });
        return () => observerView.disconnect();
    }, []);


    return (
        <section id="about" className="min-h-screen flex flex-col items-center">
            <SideNav view={view} setView={setview} />
            <div className="introduction flex flex-row justify-center items-start gap-30 pt-40 opacity-0" id="introduction_section">
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
            <div className="desc-about mt-12 w-110 ml-80 opacity-0">
                <p className="font-lexend text-white font-normal text-[20px]">
                    I&apos;m a software developer passionate about AI and machine learning. I design and implement data-driven algorithms and intelligent systems that adapt, optimize performance, and deliver real-world impact.
                </p>
            </div>
            <div className="experience pt-22 w-110 ml-80 opacity-0" id="experience_section">
                <h1 className="font-jetBrains-mono text-[36px] font-extrabold">Experience</h1>
                {experienceData.map((exp, index) => (
                    <ExperienceList key={index} Company={exp.company} Position={exp.positions} Time={exp.times} Description={exp.descriptions} />
                ))}
            </div>
            <div className="education pt-22 w-120 ml-90 opacity-0" id="education_section">
                <h1 className="font-jetBrains-mono text-[36px] font-extrabold">Education</h1>
                {educationData.map((edu, index) => (
                    <EducationCard key={index} Institution={edu.institution} Degree={edu.degree} Time={edu.time} Grade={edu.grade} Percentage={edu.Percentage} />
                ))}
            </div>
            <div className="techSkills pt-22 w-110 ml-80 opacity-0" id="techSkills_section">
                <h1 className="font-jetBrains-mono text-[36px] font-extrabold">Technical Skills</h1>
                {techSkillsData.map((tech, index) => (
                    <TechSkillsCard key={index} Title={tech.title} Skills={tech.skills} />
                ))}
            </div>
            <div className="certifications pt-22 w-120 ml-90 mb-32 opacity-0" id="certifications_section">
                <h1 className="font-jetBrains-mono text-[36px] font-extrabold">Certifications</h1>
                {certificationsData.map((cert, index) => (
                    <CertificationCard key={index} Title={cert.Title} Issuer={cert.Issuer} Year={cert.Year} CertUrl={cert.CertUrl} />
                ))}
            </div>

        </section>
    );
}
