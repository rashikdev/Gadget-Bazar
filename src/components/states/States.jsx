"use client";
import React from "react";
import { FaBox, FaUsers, FaShoppingCart, FaDollarSign } from "react-icons/fa";
import CountUp from "react-countup";

const States = () => {
  const stats = [
    {
      label: "Products",
      value: 120,
      icon: <FaBox className="text-blue-500" />,
    },
    {
      label: "Users",
      value: 340,
      icon: <FaUsers className="text-green-500" />,
    },
    {
      label: "Orders",
      value: 75,
      icon: <FaShoppingCart className="text-purple-500" />,
    },
    {
      label: "Revenue",
      value: 1200,
      icon: <FaDollarSign className="text-orange-500" />,
    },
  ];

  function formatNumber(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num.toString();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="shadow-md rounded-2xl">
          <div className="flex items-center gap-4 p-6">
            <div className="text-3xl">{stat.icon}</div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700">
                <CountUp end={stat.value} formattingFn={formatNumber} />
              </h4>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default States;
