"use client";
import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosCloseCircle } from "react-icons/io";
import DashboardSideBar from "../dashboardSidebar/DashboardSideBar";
import { motion } from "motion/react";
const DashboardSmallMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-50">
      <button
        className="cursor-pointer z-40"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <IoIosCloseCircle size={30} color="red" />
        ) : (
          <CgMenuGridO size={30} />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-0 right-0 bg-white -z-10 h-screen"
        >
          <DashboardSideBar setIsOpen={setIsOpen} />
        </motion.div>
      )}
    </div>
  );
};

export default DashboardSmallMenu;
