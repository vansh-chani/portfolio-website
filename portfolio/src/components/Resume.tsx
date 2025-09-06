// import dynamic from "next/dynamic";
// const PDFViewer = dynamic(() => import("./ui/PdfViewer"), {
//   ssr: false,
// });

export default function Resume() {
  return (
    <section id="resume" className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="heading-resume  font-jetBrains-mono text-4xl font-extrabold w-[84vw] p-4 mt-30 pb-10 text-white border-b-1 border-b-white/30 text-center">RESUME</h1>
      <iframe
        src="/Resume.pdf"
        className="w-full max-w-4xl h-[80vh] rounded-xl shadow-lg my-20"
      />
      {/* <PDFViewer /> */}
    </section>
  );
}

export function ResumeMobile() {
  return (
    <>
      <h1 className="heading-contact  font-jetBrains-mono text-3xl font-extrabold w-[90vw] p-4 mt-10 pb-10 mb-10 text-white border-b-1 border-b-white/30 text-center">RESUME</h1>
      <div className="resume-mobile max-h-[520px] max-w-110 flex flex-col items-center justify-start mb-40 p-4 mx-2 pt-10 border border-white/10 rounded-[20px] 
                                bg-[radial-gradient(ellipse,rgba(0,0,0,0.3)_0%,rgba(10,10,10,1)_80%),url('/crossPattern.svg'),linear-gradient(rgba(22,22,22,0.5),rgba(22,22,22,0.5))]
                                bg-[length:auto,40px,auto] bg-[no-repeat,repeat,repeat] bg-center " id="resume">
        <h1 className="font-jetBrains-mono text-2xl font-extrabold mb-4">Know Me in a Minute</h1>
        <p className="font-lexend font-medium text-center px-6 text-[18px] text-[#8F8F8F] mb-6">Grab a copy of my resume to get a quick overview of my skills, experience, and projects - all in one place.</p>
        <a href="/Resume" target="_blank" className="bg-white/10 text-white/70 text-sm font-jetBrains-mono px-4 py-2 mb-2 backdrop-blur-2xl rounded-md hover:bg-white/20 transition duration-300">
          View Resume
        </a>
      </div>
    </>
  );
}