import Image from "next/image";
import defaultimg from "../../assets/default.jpg"
import defaultimg2 from "../../assets/default2.jpg"
import { ProjectGithubButton } from "./Buttons";

type ProjectProps = {
    title: string;
    date: string;
    description: string;
    image: string;
    techstack: string[];
    githubUrl: string;
    config: string;
}

export default function ProjectCard(project: ProjectProps) {

    if (project.config === "right") {
        return (
            <div className="project-card flex flex-row items-center justify-center mt-16 gap-9">
                <div className="project-image-left opacity-0 w-[734px] h-[520px] border-[1px] rounded-[20px] border-white/10">
                    <Image src={project.image || defaultimg} alt={project.title} width={734} height={520} className="object-cover w-full h-full rounded-[20px]" loading="eager" priority />
                </div>
                <div className="project-info-right opacity-0 h-[520px] w-[386px] flex flex-col items-center justify-start p-4 pt-10 border border-white/10 rounded-[20px] 
                                bg-[radial-gradient(ellipse,rgba(0,0,0,0.3)_0%,rgba(10,10,10,1)_80%),url('/crossPattern.svg'),linear-gradient(rgba(22,22,22,0.5),rgba(22,22,22,0.5))]
                                bg-[length:auto,40px,auto] bg-[no-repeat,repeat,repeat] bg-center">
                    <div className="flex flex-row items-center justify-between w-full px-4 mb-4">
                        <h2 className="project-title text-2xl font-bold font-lexend text-white">{project.title}</h2>
                        <p className="project-date font-lexend font-light text-white/70">{project.date}</p>
                    </div>
                    <p className="project-description w-full px-4 font-lexend font-light text-[18px] text-[#8F8F8F]">{project.description}</p>
                    <div className="project-techstack flex flex-row flex-wrap gap-2 mt-4 px-4">
                        {project.techstack.map((tech, index) => (
                            <span key={index} className="tech-item bg-white/10 text-white/70 text-xs font-jetBrains-mono px-2 py-1 backdrop-blur-2xl rounded-md">{tech}</span>
                        ))}
                    </div>
                    <ProjectGithubButton githubUrl={project.githubUrl} />
                </div>
            </div>
        );
    }
    else if (project.config === 'left') {
        return (
            <div className="project-card flex flex-row items-center justify-center mt-16 gap-9">
                <div className="project-info-left opacity-0 h-[520px] w-[386px] flex flex-col items-center justify-start p-4 pt-10 border border-white/10 rounded-[20px] 
                                bg-[radial-gradient(ellipse,rgba(0,0,0,0.3)_0%,rgba(10,10,10,1)_80%),url('/crossPattern.svg'),linear-gradient(rgba(22,22,22,0.5),rgba(22,22,22,0.5))]
                                bg-[length:auto,40px,auto] bg-[no-repeat,repeat,repeat] bg-center">
                    <div className="flex flex-row items-center justify-between w-full px-4 mb-4">
                        <h2 className="project-title text-2xl font-bold font-lexend text-white">{project.title}</h2>
                        <p className="project-date font-lexend font-light text-white/70">{project.date}</p>
                    </div>
                    <p className="project-description w-full px-4 font-lexend font-light text-[18px] text-[#8F8F8F]">{project.description}</p>
                    <div className="project-techstack flex flex-row flex-wrap gap-2 mt-4 px-4">
                        {project.techstack.map((tech, index) => (
                            <span key={index} className="tech-item bg-white/10 text-white/70 text-xs font-jetBrains-mono px-2 py-1 backdrop-blur-2xl rounded-md">{tech}</span>
                        ))}
                    </div>
                    <ProjectGithubButton githubUrl={project.githubUrl} />
                </div>
                <div className="project-image-right opacity-0 w-[734px] h-[520px] border-[1px] rounded-[20px] border-white/10">
                    <Image src={project.image || defaultimg2} alt={project.title} width={734} height={520} className="object-cover w-full h-full rounded-[20px]" loading="eager" />
                </div>
            </div>
        );
    }
}