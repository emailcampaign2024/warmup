"use client";
import { delUser } from "@/redux/features/profileSlice";
import { googleLogout } from "@react-oauth/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Navbar = (user) => {
  const [profile, setProfile] = useState(null);
  const [googleProfile , setGoogleProfile] = useState(null)
  const router = useRouter();
  const dispatch = useDispatch()

  useEffect(() => {
    setGoogleProfile(JSON.parse(sessionStorage.getItem('googleProfile')))
    setProfile(JSON.parse(sessionStorage.getItem('user')))
  },[])

  const handleLogout = () => {
    if(googleProfile){
      googleLogout();
      setProfile(null);
      sessionStorage.removeItem("googleProfile");
      router.push("/auth/signin")
    }

    if(profile){
      dispatch(delUser(user))
      sessionStorage.removeItem('user')
      sessionStorage.removeItem('jwt')
      router.push("/auth/signin")
    }
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
          <li><a>Email Campaigns</a></li> 
          <li><a>Master Inbox</a></li>
          <li><a>Email Accounts</a></li>
          <li><a>Integrations</a></li>
          <li><a>Global Analytics</a></li>
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
      <div className="flex-none gap-2 ">
        {profile ? <p className="font-semibold text-slate-500 mt-1 mr-1">{profile.first_name}</p> : null}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className={googleProfile ? 'w-10 rounded-full' : 'w-7 rounded-full'}>
              {googleProfile ? <img alt="Profile" src={googleProfile?.picture} /> : <Image alt="Profile" src={'/profile (2).png'} width={30} height={30} /> }
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3  p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-10 dropdown-shadow"
          >
            <li>
              <p>Profile</p>
            </li>
            <li onClick={handleLogout}>
              <p>Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
