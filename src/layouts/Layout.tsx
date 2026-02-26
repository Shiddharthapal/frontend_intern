import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#d9d9d9]">
      <div className="fixed left-0 top-0 z-50 w-full">
        <Nav />
      </div>

      <div className="min-h-screen pt-14">
        <Outlet />
      </div>
    </div>
  );
}
