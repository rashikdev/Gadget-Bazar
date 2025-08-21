"use client";
import useAuth from "@/hooks/useAuth";
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaPlusCircle,
  FaBoxOpen,
  FaShoppingCart,
  FaCog,
  FaListAlt,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import adminLogo from "@/assets/adminLogo.webp";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

const DashboardSideBar = ({ setIsOpen }) => {
  const { user } = useAuth();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    {
      name: "Add Product",
      icon: <FaPlusCircle />,
      path: "/dashboard/add-product",
    },
    {
      name: "All Products",
      icon: <FaListAlt />,
      path: "/products",
    },
    {
      name: "Manage Products",
      icon: <FaBoxOpen />,
      path: "/dashboard/products",
    },
    { name: "Orders", icon: <FaShoppingCart />, path: "/dashboard/orders" },
    { name: "Settings", icon: <FaCog />, path: "/dashboard/settings" },
  ];

  const handleSignOut = () => {
    signOut();
    toast.success("Logged out successfully!");
  };

  const handleClose = () => {
    if (setIsOpen) setIsOpen(false);
  };

  return (
    <div className="flex flex-col justify-between h-full w-64 bg-white shadow-md">
      {/* admin info */}
      <div className="flex flex-col items-center py-8">
        <div className="relative">
          <Image
            src={adminLogo}
            alt="admin"
            placeholder="blur"
            className="w-20 h-20 rounded-full border-2 border-gray-300 bg-black"
          />
          <span className="w-4 h-4 bg-green-500 rounded-full border-2 border-white absolute bottom-2 right-[3px]"></span>
        </div>

        <div className="mt-3 text-center flex flex-col justify-center items-center">
          <h2
            onClick={() => setOpen(!open)}
            className=" font-semibold flex items-center"
          >
            {user?.name}
            <span>
              <MdKeyboardArrowDown size={22} />
            </span>
          </h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
      </div>

      {/* admin menu */}
      <div className="flex-1 px-6 md:space-y-6 space-y-2">
        {menuItems.map((item) => (
          <Link
            onClick={handleClose}
            href={item.path}
            key={item.name}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition ${
              pathname === item.path
                ? "text-purple-600 bg-purple-100 font-medium"
                : "text-gray-600 hover:text-black hover:bg-gray-100"
            }`}
          >
            {item.icon} <span>{item.name}</span>
          </Link>
        ))}
      </div>

      {/* admin logout/help */}
      <div className="px-6 py-6 text-gray-500">
        <button
          onClick={handleSignOut}
          className="w-full bg-[crimson] text-white py-2 rounded-md font-semibold cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardSideBar;
