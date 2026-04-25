import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => (
  <>
    <Header />
    <Navbar />
    <main>{children}</main>
  </>
);

export default MainLayout;
