import React from 'react';

import '../styles/Iklan.css';

import kiri from '../img/kiri.png';
import kanan from '../img/kanan.png';

const Iklan = () => {
    return (
        <div className='banner'>
            <div>
                <img src={kiri} alt='panah kiri' />
            </div>
            <div>
                <img src={kanan} alt='panah kanan' />
            </div>
        </div>
    );
}

export default Iklan;