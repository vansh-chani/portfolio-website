import ProjectCard from "./ui/ProjectCard";

const projectList = [{
    title: "Project 1",
    date: "Jan, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "",
    githubUrl: "https://github.com/vansh-chani",
    techstack: ["Next.js", "TypeScript", "Tailwind CSS", "LangChain", "MCP-use", "Prisma", "Github"],
},
{
    title: "Project 2",
    date: "Feb, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "",
    githubUrl: "https://github.com/vansh-chani",
    techstack: ["Next.js", "TypeScript", "Tailwind CSS"],
},
{
    title: "Project 3",
    date: "Mar, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "",
    githubUrl: "https://github.com/vansh-chani",
    techstack: ["LangChain", "MCP-use", "Prisma", "Github"],
}];

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen flex flex-col items-center pb-40">
            <h1 className="heading-projects font-jetBrains-mono text-4xl font-extrabold min-w-[1600px] p-4 mt-30 pb-10 text-white border-b-1 border-b-white/30 text-center">PROJECTS</h1>
            {projectList.map((project, index) => (
                <ProjectCard key={index} {...project} config={index % 2 === 0 ? "right" : "left"} />
            ))}
        </section>
    );
}
