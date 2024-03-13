'use client'
import DoughnutChart from "@/app/ui/doughnutChart/doughnutChart";
import StackedBarChart from "@/app/ui/stackedbarChart/stackedbarChart";
import { overViewInfo } from "@/constants";
import { getDoughnutChartData, getStackedBarChartData } from "@/utils/helper";
import React from "react";

const Overview = ({id}) => {
  const inboxVsSpamData = getDoughnutChartData(overViewInfo.inboxVsSpam) 
  const stackedBarChartData = getStackedBarChartData(overViewInfo.warmUpEmailsSentLast7Days)
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
              <DoughnutChart data1={inboxVsSpamData} />
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
            <StackedBarChart data={stackedBarChartData} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Overview;
