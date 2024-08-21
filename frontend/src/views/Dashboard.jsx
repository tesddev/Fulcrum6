import { Card } from "antd";
const Dashboard = () => {
  return (
    <div className="min-h-[100svh] flex items-center justify-center bg-[#f5f5f5]">
      <Card className="max-w-[30rem] w-[90%]">
        <h1 className="font-bold text-center text-2xl">Dashboard</h1>
        <p className="text-center">Welcome to you dashboard</p>
      </Card>
    </div>
  );
};

export default Dashboard;
