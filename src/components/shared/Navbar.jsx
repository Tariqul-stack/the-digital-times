import Link from "next/link";
import userAvater from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="flex justify-between container mt-6 mx-auto">
      <div></div>
      <ul className="flex justify-between items-center text-gray-700 gap-3">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <Image
          src={userAvater}
          alt="User avatar"
          width={50}
          height={50}
        />
        <Link href="/auth/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
