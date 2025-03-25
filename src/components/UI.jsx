import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <a
          className="pointer-events-auto mt-8 ml-10"
        >
          <img className="w-30 h-20" src="/images/zudio1.png" />
        </a>
        
        <Link to="/home" className="absolute mt-8 top-5 right-4">
        <button
        className="pointer-events-auto flex items-center justify-center bg-black/30 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
        <span className="mr-2">Continue Shopping</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </Link>

        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        <div className="relative">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              Zudio
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              Shopping
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Immersive Experience
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Checkout
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Latest Designs
            </h2>
            
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              Zudio
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              Shopping
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Immersive Experience
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Checkout
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Latest Designs
            </h2>
            
          </div>
        </div>
      </div>
    </>
  );
};
