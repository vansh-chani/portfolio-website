"use client";
import React, { useState, useEffect } from "react";

type NavbarProps = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({ page, setPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(0);
  const [height, setHeight] = useState(0);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    setPage(targetId);
    const element = document.getElementById("content");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      const sub_element = document.getElementById(targetId);
      if (sub_element) {
        sub_element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  function HandleScrolledClicked(event: React.MouseEvent<HTMLParagraphElement>) {
    const targetId = event.currentTarget.id;
    setPage(targetId);
  }

  if (scrolled === 0) {
    return (
      <nav className="navbar bg-[#0A0A0A] fixed bottom-0 w-full border-t-2 border-t-white/30">
        <NavItems />
      </nav>
    );
  }
  else if (scrolled >= height - 70) {
    return (
      <nav className="navbar flex flex-row items-center bg-[#16161680] backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,1)] fixed top-7 w-[734px] max-h-[58px] border-1 border-white/10 rounded-[20px] transition-all duration-300 ease-in-out">
        <NavItemsScrolled />
      </nav>
    );

  }
  else if (scrolled > 0) {
    return (
      <nav className="navbar bg-[#0a0a0a80] w-full border-t-2 border-t-white/30 border-b-2 border-b-white/0 border-x-2 border-x-white/0">
        <NavItems />
      </nav>
    );
  }

  function NavItems() {
    return (
      <div className="container max-w-[960px] mx-auto px-4 py-5 flex flex-row justify-between items-center">
        <p onClick={handleClick} className="text-white/70 tracking-wide text-[20px] font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101" id="about">ABOUT</p>
        <p onClick={handleClick} className="text-white/70 tracking-wide text-[20px] font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101" id="projects">PROJECTS</p>
        <p onClick={handleClick} className="text-white/70 tracking-wide text-[20px] font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101" id="resume">RESUME</p>
        <p onClick={handleClick} className="text-white/70 tracking-wide text-[20px] font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101" id="blogs">BLOGS</p>
        <p onClick={handleClick} className="text-white/70 tracking-wide text-[20px] font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101" id="contact">CONTACT</p>
      </div>
    );
  }
  function NavItemsScrolled() {
    return (
      <div className="container max-w-[960px] mx-auto px-8 py-5 flex flex-row justify-between items-center">
        <p onClick={handleClick}
          style={{
            backgroundColor: page === "about" ? "#48484880" : "transparent",
            borderRadius: page === "about" ? "16px" : "0px",
            border: page === "about" ? "0.5px solid #ffffff20" : "none",
            color: page === "about" ? "#ffffff" : "#ffffff/70",
          }}
          className="text-white/70 tracking-wide text-[16px] py-2 px-6 font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101 transition-all duration-300 ease-in-out"
          id="about">
          ABOUT
        </p>
        <p onClick={handleClick}
          style={{
            backgroundColor: page === "projects" ? "#48484880" : "transparent",
            borderRadius: page === "projects" ? "16px" : "0px",
            border: page === "projects" ? "0.5px solid #ffffff20" : "none",
            color: page === "projects" ? "#ffffff" : "#ffffff/70",
          }}
          className="text-white/70 tracking-wide text-[16px] py-2 px-6 font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101 transition-all duration-300 ease-in-out"
          id="projects">
          PROJECTS
        </p>
        <p onClick={handleClick}
          style={{
            backgroundColor: page === "resume" ? "#48484880" : "transparent",
            borderRadius: page === "resume" ? "16px" : "0px",
            border: page === "resume" ? "0.5px solid #ffffff20" : "none",
            color: page === "resume" ? "#ffffff" : "#ffffff/70",
          }}
          className="text-white/70 tracking-wide text-[16px] py-2 px-6 font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101 transition-all duration-300 ease-in-out"
          id="resume">
          RESUME
        </p>
        <p onClick={handleClick}
          style={{
            backgroundColor: page === "blogs" ? "#48484880" : "transparent",
            borderRadius: page === "blogs" ? "16px" : "0px",
            border: page === "blogs" ? "0.5px solid #ffffff20" : "none",
            color: page === "blogs" ? "#ffffff" : "#ffffff/70",
          }}
          className="text-white/70 tracking-wide text-[16px] py-2 px-6 font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101 transition-all duration-300 ease-in-out"
          id="blogs">
          BLOGS
        </p>
        <p onClick={handleClick}
          style={{
            backgroundColor: page === "contact" ? "#48484880" : "transparent",
            borderRadius: page === "contact" ? "16px" : "0px",
            border: page === "contact" ? "0.5px solid #ffffff20" : "none",
            color: page === "contact" ? "#ffffff" : "#ffffff/70",
          }}
          className="text-white/70 tracking-wide text-[16px] py-2 px-6 font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101 transition-all duration-300 ease-in-out"
          id="contact">
          CONTACT
        </p>
      </div>
    );
  }
}

