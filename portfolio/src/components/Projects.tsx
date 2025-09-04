import { useEffect } from "react";
import ProjectCard from "./ui/ProjectCard";

const projectList = [
    {
        title: "Papers",
        date: "Jun, 2024",
        description: "Automated exam paper tagging system that extracts structured information and answer keys using Gemini 2.0 Flash, with secondary pipelines for unstructured papers. Deployed on AWS EC2, it processed 1500+ papers, enhancing accessibility and searchability.",
        image: "",
        githubUrl: "https://github.com/CodeChefVIT/papers-codechef",
        techstack: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "AWS EC2"],
    },
    {
        title: "Recommender",
        date: "Jun, 2025",
        description: "Semantic book recommendation system for 7000+ books across 500+ categories, powered by Hugging Face embeddings and ChromaDB for fast similarity search. Enhanced with sentiment analysis, zero-shot classification, and EDA to improve clustering and recommendation quality.",
        image: "",
        githubUrl: "https://github.com/vansh-chani/Books_recommender",
        techstack: ["Python", "Hugging Face Transformers", "ChromaDB", "Scikit-Learn"],
    },
    {
        title: "Refyne.AI",
        date: "Feb, 2025",
        description: "Automated dataset integration and preprocessing system that expands datasets by an average of 40%, improves data completion by approx. 20%, and boosts regression accuracy by 30% through aprrox. 20+ new features using Deep Feature Synthesis.",
        image: "",
        githubUrl: "https://github.com/vansh-chani/Refyne.AI_ML",
        techstack: ["FeatureTools", "Scikit-Learn", "Kaggle API", "Gemini API", "Next.js", "TypeScript"],
    }
];

export default function Projects() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                } else {
                    entry.target.classList.remove("fade-in");
                }
            });
        });

        document.querySelectorAll(".project-card").forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);


    return (
        <section id="projects" className="min-h-screen flex flex-col items-center pb-40">
            <h1 className="heading-projects font-jetBrains-mono text-4xl font-extrabold min-w-[84vw] p-4 mt-30 pb-10 text-white border-b-1 border-b-white/30 text-center">PROJECTS</h1>
            {projectList.map((project, index) => (
                <ProjectCard key={index} {...project} config={index % 2 === 0 ? "right" : "left"} />
            ))}
        </section>
    );
}
