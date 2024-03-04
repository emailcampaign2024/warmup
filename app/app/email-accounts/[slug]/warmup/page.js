'use client'
import { FormControlLabel, Switch } from '@mui/material';
import React, { useState } from 'react'

const Warmup = () => {
  const [totalWarmUpEmailsPerDay, setTotalWarmUpEmailsPerDay] = useState(5);
  const [dailyRampUpEnabled, setDailyRampUpEnabled] = useState(false);
  const [rampUpIncrement, setRampUpIncrement] = useState(true);
  const [isOn, setIsOn] = useState(true)

  const handleSaveChanges = () => {
    const dataToSend = {
      isOn,
      totalWarmUpEmailsPerDay,
      dailyRampUpEnabled,
      rampUpIncrement,
    };


    console.log(dataToSend, 0);

  };
  return (
    <div className="flex flex-col relative">
          <div className="text-xl font-semibold ">
            Warmup settings
          </div>
          <div className="p-4 space-y-4 mb-5">
            <p className="text-md text-textDark">
              Email warm-up gradually increases email volumes on a dedicated IP
              to establish sender reputation.
            </p>
            <div>
              <FormControlLabel
                control={
                  <Switch
                    checked={isOn}
                    onChange={(e) => setIsOn(e.target.checked)}
                    value={isOn}
                  />
                }
              />
              <label className="font-semibold text-textDark">
                Enable Email Warmup
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
                Maximum number of warm up emails that could be sent via this
                email account per day (min 5)
              </p>
            </div>
            <input
              type="number"
              max={80}
              min={5}
              disabled={!isOn}
              value={totalWarmUpEmailsPerDay}
              onChange={(e) => setTotalWarmUpEmailsPerDay(e.target.value)}
              className="outline-blue-200 border border-gray-200 w-[100px] p-2"
            />
          </div>
          <hr />
          <div className="p-4 space-y-4 mb-16">
            <FormControlLabel
              control={
                <Switch
                  checked={dailyRampUpEnabled}
                  disabled={!isOn}
                  onChange={(e) => setDailyRampUpEnabled(e.target.checked)}
                  value={dailyRampUpEnabled}
                />
              }
            />
            <label className="font-semibold text-textDark">Daily RampUp</label>
            <div className="space-y-2">
              <p className="text-md text-textSoft">
                RampUp increment value per day (suggested 5 per day)
              </p>
              <input
                type="number"
                disabled={!dailyRampUpEnabled || !isOn}
                value={rampUpIncrement}
                onChange={(e) => setRampUpIncrement(e.target.value)}
                className="outline-blue-200 border border-gray-200 w-[100px] p-2"
              />
            </div>
            <hr />
          </div>
          <div className="min-w-[100px] absolute bottom-4 right-8">
            <button className='btn btn-md  bg-blue-500 text-slate-100'>Save</button>
          </div>
        </div>
  )
}

export default Warmup