"use client";
import useAuth from "@/hooks/useAuth";
import React from "react";
import {
  FaTachometerAlt,
  FaPlusCircle,
  FaBoxOpen,
  FaShoppingCart,
  FaCog,
} from "react-icons/fa";
import adminLogo from "@/assets/adminLogo.webp";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSideBar = () => {
  const { user } = useAuth();
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    {
      name: "Add Product",
      icon: <FaPlusCircle />,
      path: "/dashboard/add-product",
    },
    {
      name: "Manage Products",
      icon: <FaBoxOpen />,
      path: "/dashboard/products",
    },
    { name: "Orders", icon: <FaShoppingCart />, path: "/dashboard/orders" },
    { name: "Settings", icon: <FaCog />, path: "/dashboard/settings" },
  ];

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

        <select className="mt-3 font-semibold outline-none bg-transparent text-gray- text-center">
          <option>{user?.name || "Rashik"}</option>
          <option>Profile</option>
          <option>Account</option>
          <option>Logout</option>
        </select>
      </div>

      {/* admin menu */}
      <div className="flex-1 px-6 space-y-6">
        {menuItems.map((item) => (
          <Link
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
      <div className="px-6 py-6 text-sm text-gray-500">
        <p className="font-semibold">Need Help?</p>
        <p>505-070-1058</p>
        <p className="text-blue-500">help@emailaddress.com</p>
      </div>
    </div>
  );
};

export default DashboardSideBar;
