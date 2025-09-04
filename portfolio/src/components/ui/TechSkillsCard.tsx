export default function TechSkillsCard(techSkillsProps: { Title: string, Skills: string[] }) {
    return (
        <div>
            <h2 className="font-lexend text-[22px] font-normal mt-8">{techSkillsProps.Title}</h2>
            <div className="flex flex-wrap gap-2 my-4">
                {techSkillsProps.Skills.map((skill, index) => (
                    <span key={index} className="tech-item bg-white/10 text-white/75 text-[14px] font-jetBrains-mono px-2 py-1 backdrop-blur-2xl rounded-md hover:bg-white/20 hover:text-white hover:scale-101 transition-transform duration-100 hover:cursor-default">{skill}</span>
                ))}
            </div>
        </div>
    );
}