import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "sonner";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="w-full">
      {/* <Menubar /> */}
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="min-h-screen mt-20 ">
        {children}
        <Toaster />
      </div>
      <div className="container mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default CommonLayout;
