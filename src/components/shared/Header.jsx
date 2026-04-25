import Image from "next/image";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <div className="text-center">
      <Image
        src={logo}
        alt="The Digital Times logo"
        width={500}
        height={400}
        className="mx-auto"
      />
      <p>Journalism Without Fear or Favour</p>
      <p>Sunday, November 27, 2025</p>
    </div>
  );
};

export default Header;
