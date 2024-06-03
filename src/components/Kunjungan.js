import React from 'react';
import 'chart.js/auto';
import 'apexcharts';

import BarChart from './BarChart';

import '../styles/Kunjungan.css';

const Kunjungan = ()=> {
    return(
        <div className='kunjungan-utama'>
            <div className='kunjungan'>
                <p className='kuko'>Kunjungan Konsumen</p>
                <p className='day-kunjungan'>Hari ini</p>
            </div>
            <div className='content-kunjungan'>
                <div className='income-kunjungan'>
                    <p className='percentage-kunjungan'>↑ 99%</p>
                    <p className='label-kunjungan'>Konsumen Baru</p>
                    <p className='amount-kunjungan'>100</p>
                    <hr className='horizontal-kunjungan' />
                </div>
                <hr className='vertical-kunjungan' />
                <div className='expense-kunjungan'>
                    <p className='percentage-kunjungan'>↓ 20%</p>
                    <p className='label-kunjungan'>Konsumen Lama</p>
                    <p className='amount-kunjungan'>90</p>
                    <hr className='horizontal-kunjungan' />
                </div>
            </div>
            <BarChart />
        </div>
    );
}

export default Kunjungan;