import Navbar from "@/components/shared/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default AuthLayout;
