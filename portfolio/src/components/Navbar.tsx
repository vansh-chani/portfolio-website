export default function Navbar() {
    return (
    <nav className="navbar bg-[#0A0A0A] fixed bottom-0 w-full border-t-2 border-t-white/30">
      <div className="container max-w-[930px] mx-auto px-4 py-5 flex flex-row justify-between items-center">
        <p className="text-white/75 tracking-wide text-[22px] font-medium font-jetBrains-mono hover:text-white/100 hover:cursor-pointer">ABOUT</p>
        <p className="text-white/75 tracking-wide text-[22px] font-medium font-jetBrains-mono hover:text-white/100 hover:cursor-pointer">PROJECTS</p>
        <p className="text-white/75 tracking-wide text-[22px] font-medium font-jetBrains-mono hover:text-white/100 hover:cursor-pointer">RESUME</p>
        <p className="text-white/75 tracking-wide text-[22px] font-medium font-jetBrains-mono hover:text-white/100 hover:cursor-pointer">BLOGS</p>
        <p className="text-white/75 tracking-wide text-[22px] font-medium font-jetBrains-mono hover:text-white/100 hover:cursor-pointer">CONTACT</p>
      </div>
    </nav>
  );
}
