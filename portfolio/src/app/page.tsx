"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroText from "@/components/HeroText";

export default function Home() {
  const [page, setPage] = useState("about");

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <div className="h-[calc(100vh-70px)] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_0%,#0A0A0A_90%),linear-gradient(to_bottom,rgba(233,233,233,0.2)_0%,rgba(10,10,10,.2)_100%),radial-gradient(circle_28vh_at_70%_28%,rgba(112,112,112,0.6)_0%,rgba(0,0,0,0.6)_82%,transparent_100%),radial-gradient(circle_70vh_at_37%_55%,#707070_0%,#000000_60%,transparent_100%)] ">
        <HeroText />
      </div>
      <div className="nav flex flex-row justify-center">
        <Navbar />
      </div>
      <div className="content-reveal min-h-screen"></div>
    </main>
  );
}
