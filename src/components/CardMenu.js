import React from 'react';

import '../styles/CardMenu.css';

import transaksi from '../img/transaksi.png';
import rekap from '../img/rekapTransaksi.png';
import pelunasan from '../img/ambilPelunasan.png';
import proses from '../img/prosesTransaksi.png';

const CardMenu = ()=> {
    return(
        <div className="card-parent">
            <p style={{fontWeight: '700', marginLeft: '20px'}}>Menu Utama</p>
            <div className='menu-semi'>
                <div className="card-child">
                    <img src={transaksi} alt='transaksi'/>
                    <p>Buat <br></br> Transaksi</p>
                </div>
                <div className="card-child">
                    <img src={proses} alt='proses'/>
                    <p>Proses <br></br> Order</p>
                </div>
                <div className="card-child">
                    <img src={pelunasan} alt='pelunasan' />
                    <p>Pelunasan & <br></br> Pengambilan</p>
                </div>
                <div className="card-child">
                    <img src={rekap} alt='rekap' />
                    <p>Rekap <br></br> Transaksi</p>
                </div>
            </div>
        </div>
    );
}

export default CardMenu;