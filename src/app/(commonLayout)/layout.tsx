import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
// import Menubar from "@/components/shared/Menubar";
// import { getServerSession } from "next-auth";
import { Toaster } from "sonner";
// import { authOptions } from "../utils/authOptions";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  // const session = await getServerSession(authOptions);

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
