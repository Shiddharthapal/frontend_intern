import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/slices/authSlice";
import {
  CalendarSearch,
  ChartColumnBig,
  ClipboardCheck,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const sideMainMenu = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Tasks", path: "/tasks", badge: "12+", icon: ClipboardCheck },
  { label: "Calendar", path: "/calendar", icon: CalendarSearch },
  { label: "Analytics", path: "/analytics", icon: ChartColumnBig },
  { label: "Team", path: "/team", icon: Users },
];

const sideGeneralMenu = [
  { label: "Settings", icon: Settings },
  { label: "Help", icon: LifeBuoy },
];

export default function DashboardSidebar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <aside className="fixed left-0 top-14 h-[calc(100vh-56px)] w-[220px] bg-[#f8f8f8] flex flex-col gap-6 px-4 py-6 z-40 overflow-y-auto">
      <div>
        <p className="text-[11px] tracking-[0.1em] text-gray-400 font-medium mb-0 px-1">
          MENU
        </p>
        <ul className="flex flex-col gap-1 list-none p-0 m-0">
          {sideMainMenu.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `relative flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-all ${
                      isActive
                        ? "bg-[#edf2ed] text-[#1a5c36] font-semibold"
                        : "text-[#3a4a3e] hover:bg-gray-100"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-9 bg-[#238c5f] rounded-r-3xl" />
                      )}
                      <Icon
                        className={`w-[18px] h-[18px] rounded-[4px] flex-shrink-0 ${
                          isActive ? "border-[#1f8a5a]" : "border-[#8a9e90]"
                        }`}
                      />
                      <span className="text-[17px]">{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto bg-[#1e7d56] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <p className="text-[11px] tracking-[0.1em] text-gray-400 font-medium mb-2 px-1">
          GENERAL
        </p>
        <ul className="flex flex-col gap-1 list-none p-0 m-0">
          {sideGeneralMenu.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-[#68766d] text-[17px] cursor-pointer hover:bg-gray-100"
              >
                <Icon className="w-[18px] h-[18px] rounded-[4px] flex-shrink-0" />
                <span>{item.label}</span>
              </li>
            );
          })}
          <div
            className="cursor-pointer text-red-600 flex items-center gap-3 px-3 py-2 rounded-xl text-[17px] hover:bg-red-100"
            onClick={handleLogout}
          >
            <LogOut className="mr-0 h-4 w-4 text-[#68766d]" />
            Logout
          </div>
        </ul>
      </div>
    </aside>
  );
}
