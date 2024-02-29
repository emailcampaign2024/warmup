'use client'
import { googleLogout } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [profile , setProfile] = useState(null)
  const router = useRouter()

  useEffect(()=> {
    const data = JSON.parse(localStorage.getItem('profileDetails'))
    if(data){
      setProfile(data)
    }
  },[])

  const logOut = () => {
    googleLogout();
    setProfile(null);
    localStorage.removeItem('profileDetails'); 
    router.push('/auth/signin')
  };

  return (
    <div className="navbar bg-[#0052CC] px-4 shadow-md ">
      {console.log(profile)}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"><p className='left text-bold text-2xl'><span className='text-green-500'>i</span><span className='text-slate-50'>SYS</span></p></a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={profile?.picture}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3  p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-10"
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
