'use client'
import React, { useState } from 'react';
import Overview from './overview/page';
import General from './general/page';
import Warmup from './warmup/page';
import { generalInfo, overViewInfo } from '@/constants';

const AccountInfo = ({ params: { slug } }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-[98vw] h-full flex flex-col rounded-2xl ">
      <div className="flex items-center">
        <h2 className="font-semibold text-xl text-slate-800 py-4 px-2">{generalInfo.userName}</h2>
        <p className="text-slate-600 text-lg">{generalInfo.fromEmail}</p>
      </div>
      <div role="tablist" className="tabs tabs-lifted tabs-md">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Overview"
          checked={activeTab === 'overview'}
          onChange={() => handleTabChange('overview')}
        />
        <div
          role="tabpanel"
          className={`tab-content h-[70vh] bg-base-100 border-base-300 rounded-box p-6 ${
            activeTab === 'overview' ? '' : 'hidden'
          }`}
        > 
          <Overview id={slug} />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="General"
          checked={activeTab === 'general'}
          onChange={() => handleTabChange('general')}
        />
        <div
          role="tabpanel"
          className={`tab-content h-[70vh] bg-base-100 border-base-300 rounded-box p-6 overflow-auto ${
            activeTab === 'general' ? '' : 'hidden'
          }`}
        >
          <General id={slug}/>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Warmup"
          checked={activeTab === 'warmup'}
          onChange={() => handleTabChange('warmup')}
        />
        <div
          role="tabpanel"
          className={`tab-content h-[70vh] overflow-y-scroll bg-base-100 border-base-300 rounded-box p-6 ${
            activeTab === 'warmup' ? '' : 'hidden'
          }`}
        >
          <Warmup id={slug}/>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
