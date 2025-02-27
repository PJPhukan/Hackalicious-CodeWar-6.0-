import DashboardNavbar from "@/components/dash-nav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="fixed w-full">
        <DashboardNavbar />
      </div>
      <div className="h-full ">{children}</div>
    </div>
  );
};

export default DashboardLayout;
