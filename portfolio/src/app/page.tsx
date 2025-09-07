"use client";
import React, { useEffect, useState } from "react";
import Navbar, { NavbarMobile } from "@/components/ui/Navbar";
import HeroText from "@/components/HeroText";
import About, { AboutMobile } from "@/components/About";
import Projects, { ProjectsMobile } from "@/components/Projects";
import Resume, { ResumeMobile } from "@/components/Resume";
import Blogs from "@/components/Blogs";
import Contact, { ContactMobile } from "@/components/Contact";
import Footer, { FooterMobile } from "@/components/Footer";

function MobileComponent() {
  const [page, setPage] = useState("");
  return (
    <>
      <main className="min-h-screen bg-[#0A0A0A]">
        <div className="h-[calc(100vh-70px)] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_0%,#0A0A0A_90%),linear-gradient(to_bottom,rgba(233,233,233,0.2)_0%,rgba(10,10,10,.2)_100%),radial-gradient(circle_28vh_at_70%_28%,rgba(112,112,112,0.6)_0%,rgba(0,0,0,0.6)_82%,transparent_100%),radial-gradient(circle_70vh_at_37%_55%,#707070_0%,#000000_60%,transparent_100%)] ">
          <HeroText />
        </div>
        <div className="nav flex flex-row justify-center">
          <NavbarMobile content={page} setContent={setPage} />
        </div>
        <div id="about_content" className="flex flex-col items-center">
          <AboutMobile />
        </div>
        <div id="resume_content" className="flex flex-col items-center">
          <ResumeMobile />
        </div>
        <div id="projects_content" className="flex flex-col items-center">
          <ProjectsMobile />
        </div>
        <div id="contact_content" className="flex flex-col items-center">
          <ContactMobile />
        </div>
        <FooterMobile />
      </main>
    </>
  );
}

function DesktopComponent() {
  const [page, setPage] = useState("about");
  const [content, setContent] = useState(<About />);

  useEffect(() => {
    switch (page) {
      case "about":
        setContent(<About />);
        break;
      case "projects":
        setContent(<Projects />);
        break;
      case "resume":
        setContent(<Resume />);
        break;
      case "blogs":
        setContent(<Blogs />);
        break;
      case "contact":
        setContent(<Contact />);
        break;
      default:
        setContent(<About />);
    }
  }, [page]);

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <div className="h-[calc(100vh-70px)] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_0%,#0A0A0A_90%),linear-gradient(to_bottom,rgba(233,233,233,0.2)_0%,rgba(10,10,10,.2)_100%),radial-gradient(circle_28vh_at_70%_28%,rgba(112,112,112,0.6)_0%,rgba(0,0,0,0.6)_82%,transparent_100%),radial-gradient(circle_70vh_at_37%_55%,#707070_0%,#000000_60%,transparent_100%)] ">
        <HeroText />
      </div>
      <div className="nav flex flex-row justify-center">
        <Navbar page={page} setPage={setPage} />
      </div>
      <div id="content" className="content-reveal min-h-screen">
        {content}
      </div>
      <Footer />
    </main>
  );
}

export default function Home() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width === null) return null;
  if (width <= 1024) return <MobileComponent />;
  return <DesktopComponent />;
}
