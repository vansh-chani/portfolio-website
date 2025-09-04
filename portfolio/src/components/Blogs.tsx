import { useEffect } from "react";

export default function Blogs() {
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

                  document.querySelectorAll(".content-blog").forEach((el) => observer.observe(el));

                  return () => observer.disconnect();
              }, []);
  return (
    <section id="blogs" className="h-screen flex flex-col items-center">
      <h1 className="heading-blog  font-jetBrains-mono text-4xl font-extrabold min-w-[84vw] p-4 mt-30 pb-10 text-white border-b-1 border-b-white/30 text-center">BLOGS</h1>
      <div className="content-blog flex flex-col items-center justify-center h-140 opacity-0">
        <h2 className="font-lexend text-4xl font-extrabold bg-[linear-gradient(to_right,#8f8f8f,#333333)] bg-clip-text text-transparent">COMING SOON</h2>
      </div>
    </section>
  );
}
