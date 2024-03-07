'use client'
import DoughnutChart from "@/app/ui/doughnutChart/doughnutChart";
import StackedBarChart from "@/app/ui/stackedbarChart/stackedbarChart";
import React from "react";

const Overview = () => {
  const data1 = [70, 30]; // Example data for Dataset 1
  const ChartData = [
    [15, 0, 0],
    [7, 1, 0],
    [12, 4, 1],
  ];
  return (
    <div>
      <div className="p-3">
        <div className="flex items-center">
          <h2 className="font-semibold text-xl text-slate-800 py-4 px-2">
            Summary
          </h2>
          <p className="text-slate-600 text-lg">(last 7 days)</p>
        </div>
        <div className="stats stats-vertical lg:stats-horizontal w-full shadow">
          <div className="stat">
            <div className="stat-value text-blue-500">14</div>
            <div className="stat-title">Warmup emails sent</div>
          </div>
          <div className="stat">
            <div className="stat-value text-blue-500">14</div>
            <div className="stat-title">Landed in inbox</div>
          </div>
          <div className="stat">
            <div className="stat-value text-blue-500">0</div>
            <div className="stat-title">Saved from spam</div>
          </div>
          <div className="stat">
            <div className="stat-value text-blue-500">226</div>
            <div className="stat-title">Emails received</div>
          </div>
        </div>
      </div>
      <div className="flex w-full p-3">
        <div className="w-1/2">
          <div className="flex items-center">
            <p className="font-semibold text-xl text-slate-800 py-4 px-2">
              Inbox
            </p>
            <p className="text-slate-600 text-lg">vs</p>
            <p className="font-semibold text-xl text-slate-800 py-4 px-2">
              Spam
            </p>
          </div>
          <div className="flex w-full items-center">
            <div className="w-1/2">
              <DoughnutChart data1={data1} />
            </div>
            <div className="w-1/2">
              <div className="stats stats-vertical shadow ">
                <div className="stat ">
                  <div className="stat-value text-green-500">100%</div>
                  <div className="stat-desc">Landed from inbox</div>
                </div>
                <div className="stat">
                  <div className="stat-value text-blue-500">0%</div>
                  <div className="stat-desc">Saved from spam</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex items-center">
            <h2 className="font-semibold text-xl text-slate-800 py-4 px-2">
              Warmup email sent
            </h2>
            <p className="text-slate-600 text-lg">(last 7 days)</p>
          </div>
          <div>
            <StackedBarChart data={ChartData} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Overview;
