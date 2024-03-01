import React from "react";
import Navbar from "../ui/navbar/navbar";
import Sidebar from "../ui/sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="">
        <Navbar />
      </div>
      <div className="mx-auto h-[80%] mt-6">{children}</div>
    </div>
  );
};

export default Layout;
