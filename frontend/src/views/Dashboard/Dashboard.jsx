import { Card } from "antd";
import { Pie } from "@ant-design/plots";
import { Link } from "react-router-dom"
import useDashboard from "../../customHooks/useDashboard";

const Dashboard = () => {
  const { userCount, productCount, loading } = useDashboard();
  const userName = sessionStorage.getItem("userName") || "User";

  const data = [
    {
      type: "Users",
      value: userCount,
    },
    {
      type: "Products",
      value: productCount,
    },
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    label: {
      type: "spider",
      labelHeight: 28,
      content: ({ name, value }) => `${name}: ${value} (${(value / (userCount + productCount) * 100).toFixed(2)}%)`,
    },
    interactions: [{ type: "element-active" }],
  };

  return (
    <div className="min-h-[100svh] flex items-center justify-center bg-[#f5f5f5]">
      <Card className="max-w-[30rem] w-[90%]">
        <h1 className="font-bold text-center text-2xl">Dashboard</h1>
        <p className="text-center">Welcome to your dashboard, {userName}</p>
        <p className="text-center">Total Users: {userCount}</p>
        <p className="text-center">Total Products: {productCount}</p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Pie {...config} />
        )}
        <div>
            <button> <Link to = "/products">Click Here to go to Products</Link> </button>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
