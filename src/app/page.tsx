import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-between pt-24 md:pt-32">
      <div className="mx-auto space-y-3">
        <h1 className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent  relative   pt-5 mx-auto md:px-4 md:py-2 tracking-tighter  text-center font-semibold md:text-7xl lg:text-7xl sm:text-7xl text-5xl">
          Where Luxury Meets Affordability
        </h1>
        <p className="max-w-sm md:max-w-xl mx-auto text-balance  text-base tracking-tight text-gray-700  text-center md:text-lg ">
          At{" "}
          <span className="italic text-brand-color font-semibold">
            FlipMart
          </span>
          , we bring you premium products at unbeatable prices, making luxury
          accessible for everyone.
        </p>
        <div className="flex justify-center">
          <Link
            href="/products"
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-brand-color group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-[#ffe500]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Explore Our Collection
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
