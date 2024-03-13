"use client";
import { backendBaseUrl } from "@/constants";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Warmup = ({ id }) => {
  const [warmupSettingsData, setWarmupSettingsData] = useState({
    id: id,
    totalWarmUpEmailsPerDay: "",
    dailyRampUpEnabled: false,
    rampUpIncrement: "",
    isOn: false,
  });
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    axios.get(`${backendBaseUrl}client/warmupdetails/${id}`)
    .then((res) => {
      if(res.data.success === true){
        setWarmupSettingsData(res.data.accountCredentials)
      }
    })
  },[])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setWarmupSettingsData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSaveChanges = async () => {
    const dataToSend = {
      id: id,
      isOn: warmupSettingsData.isOn,
      totalWarmUpEmailsPerDay: warmupSettingsData.totalWarmUpEmailsPerDay,
      dailyRampUpEnabled: warmupSettingsData.dailyRampUpEnabled,
      rampUpIncrement: warmupSettingsData.rampUpIncrement,
    };
    
    setIsLoading(true)
    axios.put(`${backendBaseUrl}client/updateWarmup/${id}`, dataToSend)
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
  return (
    <div className="flex flex-col relative">
      <div className="text-xl font-semibold ">Warmup settings</div>
      <div className="p-4 space-y-4 mb-5">
        <p className="text-md text-textDark">
          Email warm-up gradually increases email volumes on a dedicated IP to
          establish sender reputation.
        </p>
        <div>
          <label className="cursor-pointer label flex justify-start items-center gap-3">
            <input
              type="checkbox"
              className="toggle toggle-md"
              name="isOn"
              value={warmupSettingsData.isOn}
              checked={warmupSettingsData.isOn}
              onChange={(e) => handleInputChange(e)}
            />
            <span className="label-text font-semibold">
              Enable Email Warmup
            </span>
          </label>
        </div>
      </div>
      <hr />
      <div className="p-4 space-y-4 mb-5">
        <div>
          <p className="font-semibold text-textDark">
            Total number of warm up emails per day
          </p>
          <p className="text-textSoft text-md">
            Maximum number of warm up emails that could be sent via this email
            account per day (min 5)
          </p>
        </div>
        <input
          type="number"
          max={80}
          min={5}
          name="totalWarmUpEmailsPerDay"
          disabled={!warmupSettingsData.isOn}
          value={warmupSettingsData.totalWarmUpEmailsPerDay}
          onChange={(e) => handleInputChange(e)}
          className="input input-bordered w-[100px]"
        />
      </div>
      <hr />
      <div className="p-4 space-y-4 mb-16">
        <label className="cursor-pointer label flex justify-start items-center gap-3">
          <input
            type="checkbox"
            className="toggle toggle-md"
            name="dailyRampUpEnabled"
            checked={warmupSettingsData.dailyRampUpEnabled}
            disabled={!warmupSettingsData.isOn}
            onChange={(e) => handleInputChange(e)}
            value={warmupSettingsData.dailyRampUpEnabled}
          />
          <span className="label-text font-semibold">Daily RampUp</span>
        </label>
        <div className="space-y-4">
          <p className="text-md text-textSoft">
            RampUp increment value per day (suggested 5 per day)
          </p>
          <input
            type="number"
            disabled={
              !warmupSettingsData.dailyRampUpEnabled || !warmupSettingsData.isOn
            }
            name="rampUpIncrement"
            value={warmupSettingsData.rampUpIncrement}
            onChange={(e) => handleInputChange(e)}
            className="input input-bordered w-[100px]"
          />
        </div>
        <hr />
      </div>
      <div className="min-w-[100px] absolute bottom-4 right-8">
        <button
          className="btn btn-md  bg-blue-500 text-slate-100"
          onClick={handleSaveChanges}
        >
          {isLoading ? <span className="loading loading-spinner loading-sm"></span> : 'Save'}
        </button>
      </div>
    </div>
  );
};

export default Warmup;
