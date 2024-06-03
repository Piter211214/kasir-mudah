import React from 'react';

import '../styles/ToDoList.css';
import r from '../img/r.png';

const ToDoList = ()=> {
    return(
        <div className='utama'>
            <div className='kata'>
                <p>To Do List</p>
            </div>
            <div className='box'>
                <div className='boxflex'>
                    <div className='line'></div>
                    <p className='tujuhbelas'>17</p>
                    <p className='order'>Order</p>
                    <div className='rgticonone'>
                        <img src={r} alt='righticon' />
                    </div>
                </div>
                <div className='boxflex'>
                    <div className='linetwo'></div>
                    <p className='empat'>4</p>
                    <p className='textbottom'>Terlambat</p>
                    <div className='rgticontwo'>
                        <img src={r} alt='righticon' />
                    </div>
                </div>
                <div className='boxflex'>
                    <div className='linethree'></div>
                    <p className='tujuh'>7</p>
                    <p className='textbottom'>Pengantaran</p>
                    <div className='rgticonthree'>
                        <img src={r} alt='righticon' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoList;