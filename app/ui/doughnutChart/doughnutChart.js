'use client'
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const DoughnutChart = ({ data1 }) => {
  const chartData = {
    datasets: [
      {
        data: data1,
        backgroundColor: ['#22C55E', '#3B8CF6'], // Customize colors as needed
        label: 'Dataset 1',
      }
    ],
    labels: ['Inbox', 'Spam'], // Customize labels based on your data
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Set to false to allow adjusting the aspect ratio
  };

  return (
    <div>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DoughnutChart;
