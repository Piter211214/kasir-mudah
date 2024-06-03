import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CardMenu from './components/CardMenu';
import './App.css';
import Uang from './components/Uang';
import Lk from './components/Lk';
import ToDoList from './components/ToDoList';
import Iklan from './components/Iklan';
import TotalUangDiterima from './components/Tud';
import Kunjungan from './components/Kunjungan';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          <div className="left-content">  
            <CardMenu />
            <Uang />
            <Lk />
            <Kunjungan />
          </div>
          <div className="right-content">
            <ToDoList />
            <Iklan />
            <TotalUangDiterima />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;