"use client";
import EmptyEmailAccount from "@/app/ui/emptyEmailAccounts/page";
import { EmailAccountsList } from "@/constants";
import { handleInputChange } from "@/utils/helper";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const EmailAccounts = () => {
  const [emailAccounts, setEmailAccounts] = useState(EmailAccountsList);
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
  const { id } = useParams()


  const handleRadioChange = (e) => {
    const { value } = e.target;
    setSmtpDetails((prevValue)=>({
      ...prevValue,
      smtpPort: value === '' ? null : parseInt(value, 10)
    }) )
  };



  const handleSmtpSaveButtonClick = (e) => {
    e.preventDefault();
    console.log(smtpDetails);
  };

  const handleAccountClick = (id) => {
    router.push(`email-accounts/${id}`);
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
            <form method="post" >
              <h3 className="font-semibold text-lg my-3">SMTP settings</h3>
              <div className="w-full space-x-6  flex  mb-6">
                <input
                  type="text"
                  placeholder="From Name"
                  className="input input-bordered w-[50%] max-w-xs"
                  name="fromName"
                  value={smtpDetails.fromName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="From Email"
                  className="input input-bordered w-[50%] max-w-xs"
                  name="fromEmail"
                  value={smtpDetails.fromEmail}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full space-x-6 flex mb-6">
                <input
                  type="text"
                  placeholder="User Name"
                  className="input input-bordered w-[50%] max-w-xs"
                  name="userName"
                  value={smtpDetails.userName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="App Password"
                  className="input input-bordered w-[50%] max-w-xs"
                  name="appPassword"
                  value={smtpDetails.appPassword}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full flex space-x-6 mb-6">
                <input
                  type="text"
                  placeholder="SMTP Host"
                  className="input input-bordered w-[50%] max-w-xs"
                  name="smtpHost"
                  value={smtpDetails.smtpHost}
                  onChange={handleInputChange}
                />
                <div className="w-[50%] flex items-center justify-between ">
                  <input
                    type="text"
                    placeholder="Port"
                    className="input input-bordered w-[30%] max-w-xs"
                    name="smtpPort"
                    value={smtpDetails.smtpPort || ""}
                    onChange={handleInputChange}
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
                      value={''}
                      checked={smtpDetails.smtpPort === ''}
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
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Minimum time gap"
                  className="input input-bordered w-[50%] max-w-xs"
                  name="minimumTimeGap"
                  value={smtpDetails.minimumTimeGap}
                  onChange={handleInputChange}
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
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="IMAP Port"
                    className="input input-bordered w-[50%] max-w-xs"
                    name="imapPort"
                    value={smtpDetails.imapPort}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full space-x-6 flex mb-6">
                  <input
                    type="text"
                    placeholder="Tag Name"
                    className="input input-bordered w-[50%] max-w-xs"
                    name="tagName"
                    value={smtpDetails.tagName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full space-x-6 flex mb-6 justify-end">
                <button
                  type="submit"
                  className="btn btn-md  bg-blue-500 text-slate-100"
                  onClick={handleSmtpSaveButtonClick}
                >
                  Save
                </button>
                <button className="btn btn-md  bg-gray-500 text-slate-100" formMethod="dialog" type="submit">
                  cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
      <div className="h-[60px] w-full  flex justify-between items-center px-2">
        <h2 className="font-semibold text-xl text-slate-800">Email Accounts</h2>
        {emailAccounts.length !== 0 ? (
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
        {emailAccounts.length !== 0 ? (
          <div className="overflow-x-auto h-[500px] px-4 border border-[#E0E0E0]  bg-white">
            <table className="table table-pin-rows ">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Daily limit</th>
                  <th>Warmup enabled</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {emailAccounts.map((account,index) => {
                  return (
                      <tr
                      key={index}
                      className="cursor-pointer hover:bg-[#DEEBFF]"
                      onClick={() => handleAccountClick(account.name)}
                    >
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="font-bold">{account.name}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p>{account.email}</p>
                      </td>
                      <td>{account.dailyLimit}/200</td>
                      <td>
                        <div
                          className={`badge  ${
                            account.warmupEnabled
                              ? "bg-green-300"
                              : "badge-ghost"
                          } text-slate-800`}
                        >
                          {account.warmupEnabled ? "Yes" : "No"}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyEmailAccount />
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default EmailAccounts;
