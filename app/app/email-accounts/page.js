"use client";
import EmptyEmailAccount from "@/app/ui/emptyEmailAccounts/page";
import {  handleInputChange } from "@/utils/helper";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const EmailAccounts = () => {
  const [emailAccounts, setEmailAccounts] = useState(null);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [smtpDetails, setSmtpDetails] = useState({
    fromName: "",
    fromEmail: "",
    userName: "",
    appPassword: "",
    smtpHost: "",
    smtpPort: "",
    messagePerDay: "",
    minimumTimeGap: "",
    imapHost: "",
    imapPort: "",
    tagName: "None",
  });
  const router = useRouter();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        setIsLoading(true);
        return config;
      },
      (error) => {
        setIsLoading(false);
        return Promise.reject(error);
      }
    );
    
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        setIsLoading(false);
        return response;
      },
      (error) => {
        setIsLoading(false);
        return Promise.reject(error);
      }
    );
    

    const fetchEmailList = async () => {
      try {
        const response = await axios.get(
          "https://warmup-backend-j7v6.onrender.com/client/getAll"
        );
        if (response.data) {
          setEmailAccounts(response.data.configs);
        }
        setShouldReload(false);
      } catch (error) {
        console.error("Error fetching email accounts:", error);
      }
    };

    fetchEmailList();

    if (shouldReload) {
      fetchEmailList();
    }

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [shouldReload]);

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setSmtpDetails((prevValue) => ({
      ...prevValue,
      smtpPort: value === "" ? null : parseInt(value, 10),
    }));
  };

  const handleSelectAllAccounts = () => {
    const allSelected = selectedAccounts.length === emailAccounts?.length;

    if (allSelected) {
      setSelectedAccounts([]);
    } else {
      const allAccountNames = emailAccounts.map((account) => account.fromName);
      setSelectedAccounts(allAccountNames);
    }
  };

  const handleSmtpSaveButtonClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://warmup-backend-j7v6.onrender.com/client/accountadd",
        smtpDetails
      );
      if (response.status === 201) {
        document.getElementById("connectSMTP").close();
        setShouldReload(true);
        toast.success("Account Added Successfully !");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccountClick = (name) => {
    const isSelected = selectedAccounts.includes(name);
    if (isSelected) {
      setSelectedAccounts((prevSelected) =>
        prevSelected.filter((accountName) => accountName !== name)
      );
    } else {
      setSelectedAccounts((prevSelected) => [...prevSelected, name]);
    }
  };

  const handleAccountOverviewClick = (name) => {
    router.push(`email-accounts/${name}`);
  };

  return (
    <div className="w-[98vw] h-full flex flex-col  rounded-2xl ">
      <dialog id="selectProvider" className="modal">
        <div className="modal-box w-96 max-w-5xl flex flex-col justify-center items-center">
          <h3 className="font-bold text-lg">Connect Google/Gmail Account</h3>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn btn-[#0052CC]"
                onClick={() =>
                  document.getElementById("connectSMTP").showModal()
                }
              >
                SMTP Setup
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="connectSMTP" className="modal">
        <div className="modal-box w-11/12 max-w-3xl flex flex-col justify-center items-center">
          <div className="modal-action">
            <form method="post" onSubmit={handleSmtpSaveButtonClick}>
              <h3 className="font-semibold text-lg my-3">SMTP settings</h3>
              <div className="w-full space-x-6  flex  mb-6">
                <input
                  type="text"
                  placeholder="From Name"
                  className="input input-bordered w-[50%] max-w-xs"
                  name="fromName"
                  value={smtpDetails.fromName}
                  onChange={(e) => handleInputChange(e, setSmtpDetails)}
                  required
                />
                <input
                  type="text"
                  placeholder="From Email"
                  className="input input-bordered w-[50%] max-w-xs"
                  name="fromEmail"
                  value={smtpDetails.fromEmail}
                  onChange={(e) => handleInputChange(e, setSmtpDetails)}
                  required
                />
              </div>
              <div className="w-full space-x-6 flex mb-6">
                <input
                  type="text"
                  placeholder="User Name"
                  className="input input-bordered w-[50%] max-w-xs"
                  name="userName"
                  value={smtpDetails.userName}
                  onChange={(e) => handleInputChange(e, setSmtpDetails)}
                  required
                />
                <input
                  type="text"
                  placeholder="App Password"
                  className="input input-bordered w-[50%] max-w-xs"
                  name="appPassword"
                  value={smtpDetails.appPassword}
                  onChange={(e) => handleInputChange(e, setSmtpDetails)}
                  required
                />
              </div>
              <div className="w-full flex space-x-6 mb-6">
                <input
                  type="text"
                  placeholder="SMTP Host"
                  className="input input-bordered w-[50%] max-w-xs"
                  name="smtpHost"
                  value={smtpDetails.smtpHost}
                  onChange={(e) => handleInputChange(e, setSmtpDetails)}
                  required
                />
                <div className="w-[50%] flex items-center justify-between ">
                  <input
                    type="text"
                    placeholder="Port"
                    className="input input-bordered w-[30%] max-w-xs"
                    name="smtpPort"
                    value={smtpDetails.smtpPort || ""}
                    onChange={(e) => handleInputChange(e, setSmtpDetails)}
                    required
                  />
                  <label className="label cursor-pointer s">
                    <span className="label-text mr-1">ssl</span>
                    <input
                      type="radio"
                      name="port"
                      className="radio"
                      value={465}
                      checked={smtpDetails.smtpPort === 465}
                      onChange={handleRadioChange}
                    />
                  </label>
                  <label className="label cursor-pointer ">
                    <span className="label-text mr-1">tls</span>
                    <input
                      type="radio"
                      name="port"
                      className="radio"
                      value={587}
                      checked={smtpDetails.smtpPort === 587}
                      onChange={handleRadioChange}
                    />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text mr-1">none</span>
                    <input
                      type="radio"
                      name="port"
                      className="radio"
                      value={""}
                      checked={smtpDetails.smtpPort === ""}
                      onChange={handleRadioChange}
                    />
                  </label>
                </div>
              </div>
              <div className="w-full space-x-6 flex mb-6">
                <input
                  type="text"
                  placeholder="Message Per Day"
                  className="input input-bordered w-[50%] max-w-xs"
                  name="messagePerDay"
                  value={smtpDetails.messagePerDay}
                  onChange={(e) => handleInputChange(e, setSmtpDetails)}
                  required
                />
                <input
                  type="text"
                  placeholder="Minimum time gap"
                  className="input input-bordered w-[50%] max-w-xs"
                  name="minimumTimeGap"
                  value={smtpDetails.minimumTimeGap}
                  onChange={(e) => handleInputChange(e, setSmtpDetails)}
                  required
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg my-3">IMAP settings</h3>
                <div className="w-full space-x-6 flex mb-6">
                  <input
                    type="text"
                    placeholder="IMAP Host"
                    className="input input-bordered w-[50%] max-w-xs"
                    name="imapHost"
                    value={smtpDetails.imapHost}
                    onChange={(e) => handleInputChange(e, setSmtpDetails)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="IMAP Port"
                    className="input input-bordered w-[50%] max-w-xs"
                    name="imapPort"
                    value={smtpDetails.imapPort}
                    onChange={(e) => handleInputChange(e, setSmtpDetails)}
                    required
                  />
                </div>
                <div className="w-full space-x-6 flex mb-6">
                  <input
                    type="text"
                    placeholder="Tag Name"
                    className="input input-bordered w-[50%] max-w-xs"
                    name="tagName"
                    value={smtpDetails.tagName}
                    onChange={(e) => handleInputChange(e, setSmtpDetails)}
                  />
                </div>
              </div>
              <div className="w-full space-x-6 flex mb-6 justify-end">
                <button
                  className="btn btn-md  bg-blue-500 text-slate-100"
                >
                  Save
                </button>
                <button
                  className="btn btn-md  bg-gray-500 text-slate-100"
                  formMethod="dialog"
                  type="reset"
                  onClick={() => {
                    setSmtpDetails({
                      fromName: "",
                      fromEmail: "",
                      userName: "",
                      appPassword: "",
                      smtpHost: "",
                      smtpPort: "",
                      messagePerDay: "",
                      minimumTimeGap: "",
                      imapHost: "",
                      imapPort: "",
                      tagName: "None",
                    })
                    document.getElementById('connectSMTP').close()
                    
                  }}
                >
                  cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
      <div className="h-[60px] w-full  flex justify-between items-center px-2">
        <h2 className="font-semibold text-xl text-slate-800">Email Accounts</h2>
        {emailAccounts === null ? null : emailAccounts.length !== 0 ? (
          <button
            className="btn btn-sm bg-blue-500 text-slate-100"
            onClick={() =>
              document.getElementById("selectProvider").showModal()
            }
          >
            Add Account
          </button>
        ) : null}
      </div>
      <div>
        <div className="overflow-x-auto h-[500px] px-4 border border-[#E0E0E0]  bg-white">
          {emailAccounts === null ? (
            <div className="mt-44 flex justify-center items-center">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          ) : emailAccounts.length === 0 ? (
            <EmptyEmailAccount />
          ) : (
            <table className="table table-pin-rows ">
              <thead>
                <tr>
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={
                          selectedAccounts.length === emailAccounts?.length &&
                          emailAccounts.length !== 0
                        }
                        onChange={handleSelectAllAccounts}
                      />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Daily limit</th>
                  <th>Warmup enabled</th>
                </tr>
              </thead>
              <tbody>
                {emailAccounts.map((account) => (
                  <tr key={account._id} className="relative">
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={selectedAccounts.includes(account.fromName)}
                          onChange={() => handleAccountClick(account.fromName)}
                        />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div
                            className="font-bold hover:text-blue-500 cursor-pointer "
                            onClick={() =>
                              handleAccountOverviewClick(account._id)
                            }
                          >
                            {account.fromName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className=" hover:text-blue-500 cursor-pointer "
                        onClick={() =>
                          handleAccountOverviewClick(account._id)
                        }
                      >
                        {account.fromEmail}
                      </p>
                    </td>
                    <td>0/{account.messagePerDay}</td>
                    <td>
                      <div
                        className={`badge  ${
                          account.warmupEnabled ? "bg-green-300" : "badge-ghost"
                        } text-slate-800`}
                      >
                        {account.warmupEnabled ? "Yes" : "No"}
                      </div>
                    </td>
                    <td>
                      <details className="dropdown dropdown-end absolute right-10 top-4">
                        <summary className="cursor-pointer btn btn-xs btn-ghost">
                          <Image
                            src={"/more_icon.png"}
                            alt="more"
                            width={20}
                            height={20}
                          />
                        </summary>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 dropdown-shadow bg-base-100 rounded-box w-52 mt-1"
                        >
                          <li>
                            <a>Remove Account</a>
                          </li>
                          <li>
                            <a>Reconnect Account</a>
                          </li>
                        </ul>
                      </details>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default EmailAccounts;
