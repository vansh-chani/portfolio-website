import { DiscordButton, GitHubButton, LinkedInButton, MailButton } from "./ui/Buttons";
import { useEffect } from "react";

export default function Contact() {
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

    document.querySelectorAll(".content-contact").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="min-h-screen flex flex-col  items-center">
      <h1 className="heading-contact  font-jetBrains-mono text-4xl font-extrabold w-[84vw] p-4 mt-30 pb-10 text-white border-b-1 border-b-white/30 text-center">CONTACT</h1>
      <div className="content-contact flex flex-col items-center justify-center h-140 opacity-0">
        <p className="mt-16 max-w-[680px] font-lexend font-regular text-[20px] text-[#8f8f8f] text-center">Got an idea, a challenge, or just want to talk tech? Drop me a message — I’m always up for interesting conversations and new projects.</p>
        <div className="social-buttons flex flex-row items-center gap-6 mt-4">
          <LinkedInButton />
          <GitHubButton />
          <DiscordButton />
        </div>
        <p className="mt-16 font-lexend font-regular text-[20px] text-[#8f8f8f] text-center">or write me an</p>
        <div className="social-buttons flex flex-row items-center gap-6 mt-4">
          <MailButton />
        </div>
      </div>
    </section>
  );
}

export function ContactMobile() {
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
    document.querySelectorAll(".content-contact").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <section id="contact" className=" flex flex-col  items-center">
      <h1 className="heading-contact  font-jetBrains-mono text-3xl font-extrabold w-[90vw] p-4 mt-10 pb-10 text-white border-b-1 border-b-white/30 text-center">CONTACT</h1>
      <div className="content-contact flex flex-col items-center justify-center h-140 opacity-0">
        <p className="mt-2 max-w-[300px] font-lexend font-regular text-[16px] text-[#8f8f8f] text-center">Got an idea, a challenge, or just want to talk tech? Drop me a message — I’m always up for interesting conversations and new projects.</p>
        <div className="social-buttons flex flex-row flex-wrap items-center justify-center gap-6 mt-4">
          <LinkedInButton />
          <GitHubButton />
          <DiscordButton />
        </div>
        <p className="mt-8 font-lexend font-regular text-[16px] text-[#8f8f8f] text-center">or write me an</p>
        <div className="social-buttons flex flex-row items-center gap-6 mt-4">
          <MailButton />
        </div>
      </div>
    </section>
  );
}