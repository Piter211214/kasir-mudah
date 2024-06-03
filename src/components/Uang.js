import React from 'react';

import '../styles/Uang.css';
import bgAmount from '../img/backgroundAmount.png';
import wallet from '../img/wallet.png';
import topUp from '../img/topUp.png';
import riwayat from  '../img/riwayat.png';

function Uang() {
    return (
      <div className="balance-card">
        <div className='tabs-coin'>
          <div className='top-coin' >
            <div className="tabs">
              <p className='coin-green'>Coin</p>
              <p>QRIS</p>
              <p>Kas Laci</p>
            </div>
          </div>
        </div>
        <div className="balance-info" style={{ backgroundImage: `url(${bgAmount})` }}>
          <div className="balance-amount">
            <img src={wallet} alt='wallet' />
            <i className="wallet-icon"></i> Rp 50.000.000.000
          </div>
          <div className="balance-actions">
            <div className="action">
              <img src={topUp} alt='topUp' />
            </div>
            <div className="action">
              <img src={riwayat} alt='riwayat' />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Uang;
