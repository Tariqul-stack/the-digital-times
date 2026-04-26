import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div>
      <h2 className="font-bold text-lg">Login with</h2>
      <div className="flex flex-col gap-2 pt-4">
        <button className="btn border-blue-400 text-blue-400">
          <FaGoogle />
          Login with google
        </button>
        <button className="btn border-black">
          <FaGithub />
          Login with github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
