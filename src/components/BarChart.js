import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {
  const series = [
    {
      name: 'Pengeluaran',
      data: [100, 100, 80, 80, 80, 80, 80],
    },
    {
      name: 'Pendapatan',
      data: [74, 76, 33, 76, 73, 50, 45],
    },
  ];

  const options = {
    chart: {
      height: 240,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
        borderRadius: 5,
      },
    },
    colors: ['#006210', '#54965F'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      type: 'category',
      categories: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu'],
      labels: {
        style: {
          colors: ['#8C8C8C', '#8C8C8C', '#8C8C8C', '#8C8C8C', '#8C8C8C', '#8C8C8C', '#388E3C'],
        },
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: '#e0e0e0',
      position: 'back',
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  return (
    <div id="chart" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Chart options={options} series={series} type="bar" height={210} width={620} />
    </div>
  );
};

export default BarChart;