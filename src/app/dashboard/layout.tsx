import DashboardNavbar from "@/components/dash-nav";
import Image from "next/image";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative chat-container">
      <div className="fixed w-full">
        <DashboardNavbar />
      </div>
      <div className="h-full ">
        <Image
          src="/chat-bg.jpg"
          alt=" "
          fill
          className="abosolute z-[-9999]"
        />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
