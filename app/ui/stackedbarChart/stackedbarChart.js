'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

const StackedBarChart = ({ data }) => {
  const chartData = {
    labels: ['jan', 'feb', 'mar ', 'april' , 'may'],
    datasets: [
      {
        label: `sent`,
        data: data[0],
        backgroundColor: 'rgb(34 ,197, 94)'
      },
      {
        label: `Replied`,
        data: data[1],
        backgroundColor: 'rgb(59, 130, 246)'
      },
      {
        label: `Saved from spam`,
        data: data[2],
        backgroundColor: 'rgb(249, 115, 22)'
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default StackedBarChart;
