import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import DashboardSidebar from "@/layouts/DashboardSidebar";

export default function Layout() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/createaccount";

  return (
    <div className="min-h-screen bg-[#d9d9d9]">
      <div className="fixed left-0 top-0 z-50 w-full">
        <Nav />
      </div>

      {!isAuthPage && <DashboardSidebar />}

      <div className={`min-h-screen pt-14 ${isAuthPage ? "" : "pl-[220px]"}`}>
        <Outlet />
      </div>
    </div>
  );
}
