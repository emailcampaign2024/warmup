"use client";
import React, { useState } from "react";
import AllCampaigns from "./all/page";
import CampaignsFolders from "./folders/page";
import Image from "next/image";
import { useRouter } from "next/navigation";

const EmailCampaigns = () => {
  const [activeTab, setActiveTab] = useState("All Campaigns");
  const router = useRouter();

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-[98vw] h-full flex flex-col rounded-2xl ">
      <div className="h-[60px] w-full  flex justify-between items-center px-2">
        <h2 className="font-semibold text-xl text-slate-800">
          Email Campaigns
        </h2>
        <div className="flex justify-between items-center space-x-6">
          <div className="dropdown dropdown-left">
            <div tabIndex={0} role="button" className="">
              <Image src={"/sort_icon.png"} alt='sort' width={28} height={28} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-8"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <label className="input input-sm  input-bordered flex items-center gap-2">
            <input type="text" className=" grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <button
            className="btn btn-sm bg-blue-500 text-slate-100"
            onClick={() => router.push("email-campaigns/new-campaign")}
          >
            Add Campaign
          </button>
        </div>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab p-2 text-[16px]"
          aria-label="All Campaigns"
          checked={activeTab === "All Campaigns"}
          onChange={() => handleTabChange("All Campaigns")}
        />
        <div
          role="tabpanel"
          className={`tab-content h-[70vh] bg-base-100 border-base-300 rounded-box p-6 ${
            activeTab === "All Campaigns" ? "" : "hidden"
          }`}
        >
          <AllCampaigns />
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab p-2 text-[16px]"
          aria-label="folders"
          checked={activeTab === "folders"}
          onChange={() => handleTabChange("folders")}
        />
        <div
          role="tabpanel"
          className={`tab-content h-[70vh] bg-base-100 border-base-300 rounded-box p-6  ${
            activeTab === "folders" ? "" : "hidden"
          }`}
        >
          folders
        </div>
      </div>
    </div>
  );
};

export default EmailCampaigns;
