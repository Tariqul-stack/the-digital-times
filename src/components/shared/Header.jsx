import Image from "next/image";
import logo from "@/assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <header className="px-4 pt-8 pb-6 text-center md:pt-12 md:pb-8">
      <div className="mx-auto max-w-6xl">
        <Image
          src={logo}
          alt="The Digital Times logo"
          priority
          className="mx-auto block h-auto w-full max-w-xl"
        />

        <div className="mt-4 space-y-1 md:mt-6">
          <p className="text-lg font-normal tracking-[0.01em] text-neutral-500 md:text-[1.05rem]">
            Journalism Without Fear or Favour
          </p>
          <p className="text-md font-semibold text-neutral-600 md:text-[1.3rem]">
            {format(new Date(), "EEEE, MMMM d, yyyy")}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
