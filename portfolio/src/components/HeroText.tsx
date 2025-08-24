import { GitHubButton, LinkedInButton } from "./Buttons";

export default function HeroText() {
    return (
        <>
            <div className="Hero flex flex-col items-center  justify-center h-full ">
                <h1 className="Name font-jetBrains-mono font-extrabold text-[64px] px-4 text-center ">Vansh Chani</h1>
                <h2 className="intro font-lexend font-medium text-2xl text-[#8F8F8F] max-w-[500px] text-center mt-2">Hi, I’m Vansh - a developer creating smarter solutions through code and data.</h2>
                <div className="Buttons flex flex-row gap-9 flex-wrap">
                    <GitHubButton />
                    <LinkedInButton />
                </div>
            </div>
        </>
    );
}