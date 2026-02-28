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
    <aside className="fixed left-0 top-14 z-40 h-[calc(100vh-56px)] w-[220px] overflow-y-auto bg-[#f8f8f8] px-4 py-6 max-lg:top-auto max-lg:bottom-0 max-lg:h-[78px] max-lg:w-full max-lg:border-t max-lg:border-[#e3e8e3] max-lg:px-2 max-lg:py-2 max-lg:shadow-[0_-8px_22px_rgba(21,36,24,0.12)] lg:flex lg:flex-col lg:gap-6">
      <div>
        <p className="mb-0 px-1 text-[11px] font-medium tracking-[0.1em] text-gray-400 max-lg:hidden">
          MENU
        </p>
        <ul className="m-0 flex list-none flex-col gap-1 p-0 max-lg:flex-row max-lg:items-center max-lg:justify-between max-lg:gap-1 max-lg:overflow-x-auto max-lg:pr-1">
          {sideMainMenu.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label} className="max-lg:flex-shrink-0">
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `relative flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition-all max-lg:min-w-[64px] max-lg:flex-col max-lg:gap-1 max-lg:px-2 max-lg:py-1.5 ${
                      isActive
                        ? "bg-[#edf2ed] text-[#1a5c36] font-semibold"
                        : "text-[#3a4a3e] hover:bg-gray-100"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute -left-4 top-1/2 h-9 w-1 -translate-y-1/2 rounded-r-3xl bg-[#238c5f] max-lg:hidden" />
                      )}
                      <Icon
                        className={`h-[18px] w-[18px] rounded-[4px] flex-shrink-0 max-lg:h-4 max-lg:w-4 ${
                          isActive ? "border-[#1f8a5a]" : "border-[#8a9e90]"
                        }`}
                      />
                      <span className="text-[17px] leading-none max-lg:text-[11px]">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="ml-auto rounded-full bg-[#1e7d56] px-2 py-0.5 text-[11px] font-bold text-white max-lg:hidden">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
          <li className="hidden max-lg:flex-shrink-0 max-lg:block">
            <button
              type="button"
              onClick={handleLogout}
              className="relative flex min-w-[64px] cursor-pointer flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[#b42318] transition-all hover:bg-red-50"
            >
              <LogOut className="h-4 w-4" />
              <span className="text-[11px] leading-none">Logout</span>
            </button>
          </li>
        </ul>
      </div>

      <div className="max-lg:hidden">
        <p className="mb-2 px-1 text-[11px] font-medium tracking-[0.1em] text-gray-400">
          GENERAL
        </p>
        <ul className="m-0 flex list-none flex-col gap-1 p-0">
          {sideGeneralMenu.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-[17px] text-[#68766d] hover:bg-gray-100"
              >
                <Icon className="h-[18px] w-[18px] rounded-[4px] flex-shrink-0" />
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
