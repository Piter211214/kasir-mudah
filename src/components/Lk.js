import React from 'react';
import 'chart.js/auto';
import 'apexcharts';

import LineChart from './LineChart';

import { Line } from 'react-chartjs-2';
import '../styles/Lk.css';

const Lk = () => {
    return(
        <div className='parent-lk'>
            <div className='laporan'>
                <p className='lapke'>Laporan Keuangan</p>
                <p className='day'>Hari ini</p>
            </div>
            <div className='content'>
                <div className='income'>
                    <p className='percentage'>↑ 99%</p>
                    <p className='label'>Total Pendapatan</p>
                    <p className='amount'>Rp 350.000</p>
                    <hr className='horizontal' />
                </div>
                <hr className='vertical' />
                <div className='expense'>
                    <p className='percentage'>↓ 20%</p>
                    <p className='label'>Total Pengeluaran</p>
                    <p className='amount'>Rp 275.500</p>
                    <hr className='horizontal' />
                </div>
            </div>
            <LineChart />
            <div className='hari'>
                <p>Minggu</p>
                <p>Senin</p>
                <p>Selasa</p>
                <p>Rabu</p>
                <p>Kamis</p>
                <p>Jum'at</p>
                <p className='green-saturday'>Sabtu</p>
            </div>
        </div>
    );
}

export default Lk;