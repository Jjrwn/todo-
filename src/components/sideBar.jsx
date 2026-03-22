import { NavLink } from "react-router-dom";
import { MdTaskAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";

const navItems = [
  { to: "/", end: true, icon: <MdSpaceDashboard />, label: "Dashboard" },
  { to: "/my-tasks", end: true, icon: <MdTaskAlt />, label: "My Tasks" },
  { to: "/important", end: false, icon: <FaStar />, label: "Important" },
  { to: "/completed", end: false, icon: <FaCheckCircle />, label: "Completed" },
];

const linkClass = ({ isActive }) =>
  `flex items-center justify-center lg:justify-start space-x-0 lg:space-x-2 
   px-3 py-2 rounded-md transition-colors duration-150
   ${
     isActive
       ? "bg-[#456882] text-[#E3E3E3] font-bold"
       : "text-[#E3E3E3] hover:bg-[#234C6A]"
   }`;

function SideBar() {
  return (
    <>
      <aside className="hidden md:flex h-screen w-16 lg:w-60 bg-[#1B3C53] flex-col items-center p-4 shrink-0">
        <nav aria-label="Sidebar navigation" className="w-full">
          <div className="flex items-center justify-center h-16 border-b border-gray-700 mb-8">
            <MdSpaceDashboard className="text-[#E3E3E3] text-2xl lg:hidden" />
            <h1 className="hidden lg:block text-[#E3E3E3] text-3xl font-semibold tracking-wide">
              Task Flow
            </h1>
          </div>

          <ul className="flex flex-col gap-2 text-lg text-[#E3E3E3]">
            {navItems.map(({ to, end, icon, label }) => (
              <li key={to}>
                <NavLink to={to} end={end} className={linkClass} title={label}>
                  <span className="text-xl shrink-0"> {icon}</span>
                  <span className="hidden lg:inline">{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <nav
        aria-label="Bottom navigation"
        className="fixed bottom-0 inset-x-0 z-50 flex md:hidden bg-[#1B3C53] border-t border-gray-700"
      >
        {navItems.map(({ to, end, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 py-3 text-xs gap-1 transition-colors duration-150
               ${
                 isActive
                   ? "text-white font-bold bg-[#456882]"
                   : "text-[#c0cdd6] hover:bg-[#234C6A]"
               }`
            }
          >
            <span className="text-xl">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default SideBar;
