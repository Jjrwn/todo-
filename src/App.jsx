import "./App.css";
import SideBar from "./components/sideBar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import MyTasks from "./pages/MyTasks";
import Important from "./pages/Important";
import Completed from "./pages/Completed";
import { TaskProvider } from "./components/TaskContext";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  const headerMap = {
    "/": { title: "Dashboard", showSearch: true },
    "/my-tasks": { title: "My Tasks", showSearch: true },
    "/important": { title: "Important Tasks", showSearch: true },
    "/completed": { title: "Completed Tasks", showSearch: false },
  };

  const { title, showSearch } = headerMap[pathname] || {
    title: "",
    showSearch: false,
  };

  return (
    <div className="flex min-h-screen bg-[#1B3C53]">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header title={title} showSearch={showSearch} />

        <main className="flex-1 p-6 bg-[#E3E3E3]">
          <TaskProvider>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/my-tasks" element={<MyTasks />} />
              <Route path="/important" element={<Important />} />
              <Route path="/completed" element={<Completed />} />
            </Routes>
          </TaskProvider>
        </main>
      </div>
    </div>
  );
}

export default App;
