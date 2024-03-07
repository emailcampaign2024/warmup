'use client'
import React, { Suspense } from "react";
import Navbar from "../ui/navbar/navbar";
import Sidebar from "../ui/sidebar/sidebar";
import { useSelector } from "react-redux";
import Loading from "./email-accounts/loading";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="">
        <Navbar  />
      </div>
      <div className="mx-auto h-[80%] mt-6">
          {children}
      </div>
    </div>
  );
};

export default Layout;
