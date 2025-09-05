import { useEffect, useState } from "react";

type SideNavProps = {
    view: string;
    setView?: React.Dispatch<React.SetStateAction<string>>;
};

export default function SideNav({view , setView}: SideNavProps) {
    const [_section, setSection] = useState("introduction");
    const [showSideNav, setShowSideNav] = useState(false);
    const [scrolled, setScrolled] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(window.innerHeight);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);



    function handleClick(event: React.MouseEvent<HTMLParagraphElement>) {
        const targetId = event.currentTarget.id;
        setSection(targetId + "_section");
        const element = document.getElementById(targetId + "_section");
        console.log(element);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
    useEffect(() => {
        if (scrolled > height * 0.9) {
            setShowSideNav(true);
        } else {
            setShowSideNav(false);
        }
    }, [scrolled, height]);
    return (
        <div className={`fixed left-20 top-1/2 -translate-y-1/2 container max-w-100 mx-auto px-4 py-5 flex flex-col justify-center items-start gap-4 ${showSideNav ? " opacity-100 translate-x-0" : " opacity-0 -translate-x-10 pointer-events-none"} transition-all duration-300`}>
            <p onClick={handleClick}
                style={{
                    color: view === "introduction_section" ? "#ffffff" : "#8f8f8f",
                    fontSize: view === "introduction_section" ? "22px" : "20px"
                }}
                className="text-white/70 tracking-wide text-[20px] font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101" id="introduction">Introduction</p>
            <p onClick={handleClick}
                style={{
                    color: view === "experience_section" ? "#ffffff" : "#8f8f8f",
                    fontSize: view === "experience_section" ? "22px" : "20px"
                }}
                className="text-white/70 tracking-wide text-[20px] font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101" id="experience">Experience</p>
            <p onClick={handleClick}
                style={{
                    color: view === "education_section" ? "#ffffff" : "#8f8f8f",
                    fontSize: view === "education_section" ? "22px" : "20px"
                }}
                className="text-white/70 tracking-wide text-[20px] font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101" id="education">Education</p>
            <p onClick={handleClick}
                style={{
                    color: view === "techSkills_section" ? "#ffffff" : "#8f8f8f",
                    fontSize: view === "techSkills_section" ? "22px" : "20px"
                }}
                className="text-white/70 tracking-wide text-[20px] font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101" id="techSkills">Technical Skills</p>
            <p onClick={handleClick}
                style={{
                    color: view === "certifications_section" ? "#ffffff" : "#8f8f8f",
                    fontSize: view === "certifications_section" ? "22px" : "20px"
                }}
                className="text-white/70 tracking-wide text-[20px] font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101" id="certifications">Certifications</p>
        </div>
    );
}

