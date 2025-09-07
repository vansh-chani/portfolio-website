import { GitHubButton, LinkedInButton } from "./ui/Buttons";

export default function HeroText() {
    return (
        <>
            <div className="animate-appear Hero flex flex-col items-center  justify-center h-full ">
                <h1 className="Name text-[40px] font-jetBrains-mono font-extrabold md:text-[64px] px-4 text-center ">Vansh Chani</h1>
                <h2 className="intro text-[14px] font-lexend font-medium md:text-2xl px-2 md:px-0 text-[#8F8F8F] max-w-[300px] md:max-w-[500px] text-center mt-2">Hi, I’m Vansh - a developer creating smarter solutions through code and data.</h2>
                <div className="Buttons flex flex-row gap-4 md:gap-9 px-2 justify-center flex-wrap">
                    <GitHubButton />
                    <LinkedInButton />
                </div>
            </div>
        </>
    );
}