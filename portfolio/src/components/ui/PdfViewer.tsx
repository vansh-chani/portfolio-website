// "use client";
// import { Document, Page, pdfjs } from "react-pdf";
// import { useState } from "react";
// import { ZoomIn, ZoomOut } from "lucide-react";

// pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

// export default function PDFViewer() {
//   const [numPages, setNumPages] = useState(0);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [scale, setScale] = useState(1);

//   return (
//     <div className="flex flex-col items-center p-6">
//       <div className="flex gap-3 mb-4">
//         <button onClick={() => setScale(scale + 0.2)}>
//           <ZoomIn className="w-4 h-4" />
//         </button>
//         <button onClick={() => setScale(scale - 0.2)}>
//           <ZoomOut className="w-4 h-4" />
//         </button>
//       </div>

//       <Document
//         file="/Resume.pdf"
//         onLoadSuccess={({ numPages }) => setNumPages(numPages)}
//       >
//         <Page pageNumber={pageNumber} scale={scale} />
//       </Document>

//       <p className="mt-4 text-gray-600">
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// }
