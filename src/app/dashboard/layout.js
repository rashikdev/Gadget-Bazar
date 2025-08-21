// dashboard layoute

import DashboardSideBar from "@/components/dashboardSidebar/DashboardSideBar";
import DashboardSmallMenu from "@/components/dashboardSmallMenu/DashboardSmallMenu";


const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1 h-screen hidden md:block">
        <DashboardSideBar />
      </div>
      <div className="flex-5 py-8 px-4">
        <div className="flex justify-end md:hidden">
          <DashboardSmallMenu />
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
