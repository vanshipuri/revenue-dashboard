import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="main-layout">
        <Sidebar />
        <main className="main-content">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
