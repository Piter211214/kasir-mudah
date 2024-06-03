import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
  const series = [
    {
      name: 'Pengeluaran',
      data: [26, 60, 35, 50, 49, 60, 60],
    },
    {
      name: 'Pendapatan',
      data: [30, 80, 35, 45, 20, 55, 70],
    },
  ];

  const options = {
    chart: {
      height: 240,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [20, 100, 100],
    },
  },
    colors: ['#55BD00', '#006210'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'category',
      categories: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu'],
      labels: {
        show: false,
        style: {
          textAlign: 'center',
          colors: ['#8C8C8C', '#8C8C8C', '#8C8C8C', '#8C8C8C', '#8C8C8C', '#8C8C8C', '#388E3C'],
        },
        formatter: function(val, timestamp, index) {
          return '';
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
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
    annotations: {
      points: [
        {
          x: series[0].data[9],
          y: series[0].data[6],
          marker: {
            size: 6,
            fillColor: '#ffffff',
            strokeWidth: 3,
            strokeColor: '#55BD00',
          },
        },
        {
          x: series[1].data[9],
          y: series[1].data[6],
          marker: {
            size: 6,
            fillColor: '#ffffff',
            strokeWidth: 3,
            strokeColor: '#006210',
          },
        },
      ],
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
    }
  };

  options.xaxis.labels.style.colors = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu'];

  return (
    <div id="chart" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Chart options={options} series={series} type="area" height={210} width={620} />
    </div>
  );
};

export default LineChart;