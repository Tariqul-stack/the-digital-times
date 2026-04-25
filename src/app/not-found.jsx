import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center px-4 font-serif">
      {/* Top border accent */}
      <div className="w-full h-1 bg-[#cc0000] fixed top-0 left-0" />

      {/* Content */}
      <div className="text-center max-w-md w-full">
        {/* 404 number */}
        <p className="text-[7rem] font-bold leading-none text-[#cc0000] tracking-tight select-none">
          404
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 border-t-2 border-[#1a1a1a]" />
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#1a1a1a] uppercase">
            Page Not Found
          </span>
          <div className="flex-1 border-t-2 border-[#1a1a1a]" />
        </div>

        {/* Message */}
        <p className="text-base text-[#555] leading-relaxed mt-4 font-sans">
          The page you are looking for has been removed, moved, or never existed
          in our archives.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
          <Link
            href="/"
            className="bg-[#1a1a1a] text-white text-xs font-bold tracking-widest uppercase font-sans px-6 py-3 hover:bg-[#333] transition-colors"
          >
            Go to Home
          </Link>
          <Link
            href="/"
            className="border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs font-bold tracking-widest uppercase font-sans px-6 py-3 hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            Go Back
          </Link>
        </div>

        {/* Site name */}
        <p className="text-xs text-gray-400 mt-10">
          © {new Date().getFullYear()} The Digital Times
        </p>
      </div>
    </div>
  );
};

export default NotFound;
