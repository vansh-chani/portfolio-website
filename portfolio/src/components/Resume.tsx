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
