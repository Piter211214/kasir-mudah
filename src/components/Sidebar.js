import React from 'react';
import '../styles/Sidebar.css';
import logo from '../img/logo.png';
import logodua from '../img/logodua.png';
import rumah from '../img/rumah.png';
import duid from '../img/duid.png';
import hiii from '../img/hiii.png';
import list from '../img/list.png';
import btnlogout from '../img/btnlogout.png';
import stats from '../img/stats.png';
import panah from '../img/panah.png';
import titiktiga from '../img/titik.png';
import pbottom from '../img/pbottom.png';

export default function Sidebar() {
  return (
    <div className='side'>
      <div className='warp'>
        <img src={logo} alt='logo' />
      </div>
      <hr />
      <div className='warp-pp'>
        <img src={logodua} alt='logodua' />
        <h2>Real Wash Wish</h2>
      </div>
      <hr />
      <div className='warp-main'>
        <div className='main'>
          <img src={rumah} alt='dashboard' />
          <p>Dashboard</p>
        </div>
        <div className='main'>
          <img src={duid} alt='transaksi' />
          <p style={{ width: "100%" }}>Transaksi</p>
          <p className='seventeen'>17</p>
          <img src={panah} style={{ width: "12px" }} alt='panah' />
        </div>
        <div className='drop'>
          <div className='main'>
            <p>Buat Transaksi</p>
          </div>
          <div className='main'>
            <p>Proses Order</p>
          </div>
          <div className='main'>
            <p>Ambil & Lunasi</p>
          </div>
          <div className='main'>
            <p>Rekap Transaksi</p>
          </div>
          <div className='main'>
            <p>Top Up Deposit</p>
          </div>
        </div>
        <div className='main'>
          <img src={duid} alt='keuangan' />
          <p>Keuangan</p>
          <img src={pbottom} alt='pbottom' style={{marginLeft: '195px', width: '14px'}} />
        </div>
        <div className='main'>
          <img src={stats} alt='laporan' />
          <p>laporan</p>
        </div>
        <div className='main'>
          <img src={hiii} alt='konsumen' />
          <p>konsumen</p>
        </div>
        <div className='main'>
          <img src={list} alt='daftar' />
          <p>Daftar Layanan</p>
        </div>
        <div className='main'>
          <img src={titiktiga} alt='titik' />
          <p>Lainnya</p>
          <img src={pbottom} alt='pbottom' style={{marginLeft: '211px', width: '14px'}} />
        </div>
        <div className='main' style={{ paddingTop: "630px" }}>
          <img src={btnlogout} alt='button' />
          <p className='exit'>Keluar</p>
        </div>
      </div>
    </div>
  );
}