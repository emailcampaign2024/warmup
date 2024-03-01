"use client";
import { googleLogout } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("profileDetails"));
    if (data) {
      setProfile(data);
    }
  }, []);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    localStorage.removeItem("profileDetails");
    router.push("/auth/signin");
  };

  return (
    <div className="navbar px-4 navbar-shadow ">
      <div className="flex-none">
        <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <ul tabIndex={0} className="menu dropdown-content  z-10 p-2 shadow bg-base-100 rounded-box w-52 dropdown-shadow mt-4">
          <li><a>Item 1</a></li> 
          <li><a>Item 2</a></li>
        </ul>
      </div>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <p className="left text-bold text-2xl">
            <span className="text-green-500">i</span>
            <span className="text-blue-500">SYS</span>
          </p>
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Profile" src={profile?.picture} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3  p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-10 dropdown-shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li onClick={logOut}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
