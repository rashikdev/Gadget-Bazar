import Chart from "@/components/chart/Chart";
import States from "@/components/states/States";
import { GetAllProducts } from "@/lib/GetProduct";

const Dashboard = async () => {
  const products = await GetAllProducts();
  // console.log(products);

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">
        📊 Dashboard Overview
      </h2>

      {/* Stats Cards */}
      <States />

      {/* Chart Section */}
      <Chart />
    </div>
  );
};

export default Dashboard;
