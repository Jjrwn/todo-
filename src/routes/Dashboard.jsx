import { FaCheckCircle } from "react-icons/fa";
import { TbProgressCheck } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";
import { MdTask } from "react-icons/md";

const Dashboard = () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const totalTasks = storedTasks.length;
  const pendingTasks = storedTasks.filter((task) => !task.completed).length;
  const importantTasks = storedTasks.filter((task) => task.important).length;
  const completedTasks = storedTasks.filter((task) => task.completed).length;

  const stats = [
    {
      icon: <MdTask />,
      label: "Total Tasks",
      count: totalTasks,
      accent: "bg-blue-100 text-blue-600",
    },
    {
      icon: <TbProgressCheck />,
      label: "Pending Tasks",
      count: pendingTasks,
      accent: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <FaStar />,
      label: "Important",
      count: importantTasks,
      accent: "bg-orange-100 text-orange-500",
    },
    {
      icon: <FaCheckCircle />,
      label: "Completed",
      count: completedTasks,
      accent: "bg-green-100 text-green-600",
    },
  ];

  const StatCard = ({ icon, label, count, accent }) => (
    <div className="bg-[#E3E3E3] p-4 sm:p-6 rounded-lg shadow-md flex flex-row sm:flex-col items-center sm:items-center gap-4 sm:gap-2">
      <span
        className={`flex items-center justify-center text-2xl sm:text-3xl w-12 h-12 rounded-full shrink-0 ${accent}`}
      >
        {icon}
      </span>
      <div className="flex flex-col sm:items-center">
        <h2 className="text-base sm:text-xl font-semibold text-[#1B3C53]">
          {label}
        </h2>
        <p className="text-2xl sm:text-3xl font-bold text-[#1B3C53] mt-0 sm:mt-1">
          {count}
        </p>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-4" />
    </div>
  );
};

export default Dashboard;
