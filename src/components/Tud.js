import React from 'react';
import 'chart.js/auto';
import 'apexcharts';

import '../styles/Tud.css';
import TotalLineChart from './TotalLineChart';

const Tud = ()=> {
    return(
        <div className='parent-tud'>
            <div className='total'>
                <p className='total-uang'>Total Uang Diterima</p>
                <p className='date'>23 Sep - 29 Sep 2023</p>
            </div>
            <div className='total-uang-diterima'>
                <p>Rp 570.000,23</p>
            </div>
            <TotalLineChart />
            <div className='angka'>
                <p>23</p>
                <p>24</p>
                <p>25</p>
                <p>26</p>
                <p>27</p>
                <p>28</p>
                <p className='green-twenty-nine'>29</p>
            </div>
            <div className='checkbox'>
                <div className='green-600'>
                    <div className='content-600'></div>
                    <p className='cash'>Cash</p>
                </div>
                <div className='green-400'>
                    <div className='content-400'></div>
                    <p className='bank'>Bank</p>
                </div>
                <div className='green-200'>
                    <div className='content-200'></div>
                    <p className='paylink'>Paylink</p>
                </div>
            </div>
        </div>
    );
}

export default Tud;