"use client";
import { backendBaseUrl, endPoints } from "@/constants";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const General = ({id}) => {
  const [smtpDetails, setSmtpDetails] = useState({
    fromName:'',
    fromEmail: '',
    userName: '',
    appPassword: '',
    smtpHost: '',
    smtpPort: '',
    messagePerDay: '',
    minimumTimeGap: '',
    imapHost: '',
    imapPort: '',
    tagName: "None",
  });
  const [isLoading,setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get(`${endPoints.getEmailAccountsDetailsById}/${id}`)
    .then((res) => {
      if(res.status === 200){
        setSmtpDetails(res.data.accountCredentials)
      }
    })
    .catch((error) => {
      toast.error("Error Fetching Data")
    })
    .finally(() => {
      setIsLoading(false)
    })
  } , [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSmtpDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setSmtpDetails((prevValue) => ({
      ...prevValue,
      smtpPort: value === "" ? null : parseInt(value, 10),
    }));
  };

  const handleSmtpSaveButtonClick = (e) => {
    e.preventDefault();
    setIsLoading(true)
    axios.put(`${backendBaseUrl}client/updateaccount/${id}`, smtpDetails)
    .then((res) => {
      console.log(res)
      setIsLoading(false)
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      setIsLoading(false)
    })
  };
  
  const handleCancelButtonClick = () => {
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
  }

  return (
    <div className="relative theme-dark">
      <form method="post" className="flex space-x-8">
        <div className="flex flex-col">
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
              type="password"
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
              <label className="label cursor-pointer">
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
              <label className="label cursor-pointer mr-14">
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
        </div>
        <div className="flex flex-col">
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
      </form>
          <div className="space-x-6 absolute right-12 -bottom-20">
            <button
              type="submit"
              className="btn btn-md  bg-blue-500 text-slate-100"
              onClick={handleSmtpSaveButtonClick}
            >
              Save
            </button>
            <button
              className="btn btn-md  bg-gray-500 text-slate-100"
              formMethod="dialog"
              type="submit"
              onClick={handleCancelButtonClick}
            >
              cancel
            </button>
          </div>
    </div>
  );
};

export default General;
