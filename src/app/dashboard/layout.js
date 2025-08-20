// dashboard layoute

import DashboardSideBar from "@/components/dashboardSidebar/DashboardSideBar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1 h-screen">
        <DashboardSideBar />
      </div>
      <div className="flex-5 py-8 px-4">{children}</div>
    </div>
  );
};

export default DashboardLayout;
