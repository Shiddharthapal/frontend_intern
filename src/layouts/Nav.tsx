import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

interface UserDetails {
  _id: string;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
}

export default function Navbar() {
  const [userData, setUserData] = useState<UserDetails|null>(null);
  const user = useAppSelector((state) => state.auth.user);
  let id = user?._id;

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(`/api/${id}`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
        }
      });
      if(!response.ok){
        console.error("Failed to fetch user details");
        
      }

      let result = await response.json();
     setUserData(result.userdetails);
    };
    fetchData();
  }, [user]);
  return (
    <div className="w-full bg-[#f8f8f8] flex items-center justify-between px-6 py-3">
      {/* Brand */}
      <div className="flex items-center gap-3 px-1">
        <div className="w-10 h-10 flex items-center justify-center">
          <svg
            viewBox="0 0 40 40"
            width="40"
            height="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer circle */}
            <circle
              cx="20"
              cy="20"
              r="18"
              stroke="#2a9d6e"
              strokeWidth="3"
              fill="white"
            />
            {/* Middle circle */}
            <circle
              cx="20"
              cy="20"
              r="11"
              stroke="#2a9d6e"
              strokeWidth="3"
              fill="white"
            />
            {/* Inner heart/leaf shape */}
            <path
              d="M20 26 C20 26 13 21 13 16.5 C13 14 15 12 17.5 12 C18.8 12 20 13 20 13 C20 13 21.2 12 22.5 12 C25 12 27 14 27 16.5 C27 21 20 26 20 26Z"
              fill="#2a9d6e"
            />
          </svg>
        </div>
        <span className="text-[26px] font-bold tracking-tight text-gray-800">
          Donezo
        </span>
      </div>
      {/* Search */}
      <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 w-64">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" strokeWidth="2" />
          <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-gray-400 text-sm flex-1">Search task</span>
        <span className="flex items-center gap-0.5 text-gray-400 text-xs bg-gray-100 rounded-md px-1.5 py-0.5 font-mono">
          <span>⌘</span>
          <span>F</span>
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Mail */}
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <rect x="2" y="4" width="20" height="16" rx="3" strokeWidth="1.8" />
            <path d="m2 7 10 7 10-7" strokeWidth="1.8" />
          </svg>
        </button>

        {/* Bell */}
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M13.73 21a2 2 0 0 1-3.46 0"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Avatar + User info */}
        <div className="flex items-center gap-3 ml-1">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-amber-200 flex items-center justify-center text-lg">
            🧑
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-800 leading-tight">
             {userData ? userData.name : "Loading..."}
            </span>
            <span className="text-xs text-gray-400">{userData ? userData.email : ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
