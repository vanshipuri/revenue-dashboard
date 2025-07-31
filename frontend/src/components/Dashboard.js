import React from 'react';
import QuarterlyRevenueChart from './QuarterlyRevenueChart';
import RevenueBridgeAnalysis from './RevenueBridgeAnalysis';
import CountryRevenueChart from './CountryRevenueChart';
import RegionRevenueChart from './RegionRevenueChart';
import CustomerConcentrationChart from './CustomerConcentrationChart';

const Dashboard = () => {
  return (
    <div className="grid gap-6">
      
      <div className="grid md:grid-cols-2 gap-4">
        <QuarterlyRevenueChart />
        <RevenueBridgeAnalysis />
      </div>

      
      <div className="grid md:grid-cols-2 gap-4">
        <CountryRevenueChart />
        <RegionRevenueChart />
      </div>

      
      <CustomerConcentrationChart />
    </div>
  );
};

export default Dashboard;
