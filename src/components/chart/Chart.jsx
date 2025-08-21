"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const Chart = () => {
  const chartData = [
    { name: "Headphones", value: 400 },
    { name: "Smartwatches", value: 300 },
    { name: "Earbuds", value: 200 },
    { name: "Powerbanks", value: 100 },
    { name: "Cameras", value: 50 },
    { name: "Chargers", value: 50 },
  ];

  const COLORS = ["#3B82F6", "#10B981", "#8B5CF6", "#F59E0B"];


  return (
    <div className="shadow-md rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-4">Products by Category</h3>
      <div className="h-72">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
