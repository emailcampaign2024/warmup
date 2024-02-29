import React from "react";
import EmailIcon from "@mui/icons-material/Email";

const Sidebar = () => {
  return (
    <div className="w-fit min-h-[90vh]  border-r border-[#E0E0E0]">
      <ul className="menu bg-[#DEEBFF] h-full">
        <li className="tooltip  tooltip-right" data-tip="Email Accounts">
          <a>
            <EmailIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
