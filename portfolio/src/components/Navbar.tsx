export default function Navbar() {
    return (
    <nav className="navbar bg-[#0A0A0A] fixed bottom-0 w-full border-t-2 border-t-white/30">
      <div className="container max-w-[960px] mx-auto px-4 py-5 flex flex-row justify-between items-center">
        <p className="text-white/70 tracking-wide text-[20px] font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101">ABOUT</p>
        <p className="text-white/70 tracking-wide text-[20px] font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101">PROJECTS</p>
        <p className="text-white/70 tracking-wide text-[20px] font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101">RESUME</p>
        <p className="text-white/70 tracking-wide text-[20px] font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101">BLOGS</p>
        <p className="text-white/70 tracking-wide text-[20px] font-regular font-jetBrains-mono inline-block hover:text-white/100 hover:cursor-pointer hover:scale-101">CONTACT</p>
      </div>
    </nav>
  );
}
