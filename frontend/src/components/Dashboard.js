import React from 'react';
import QuarterlyRevenueChart from './QuarterlyRevenueChart';
import RevenueBridgeAnalysis from './RevenueBridgeAnalysis';
import CountryRevenueChart from './CountryRevenueChart';
import RegionRevenueChart from './RegionRevenueChart';
import CustomerConcentrationChart from './CustomerConcentrationChart';

const Dashboard = () => {
  return (
    <div className="grid gap-6">
      
      <div id="quarterly-revenue" className="grid md:grid-cols-2 gap-2">
        <QuarterlyRevenueChart />
        </div>
        <div id="revenue-bridge" className="grid md:grid-cols-2 gap-2">
        <RevenueBridgeAnalysis />
      </div>

      
      <div id="country-revenue" className="grid md:grid-cols-2 gap-2">
        <CountryRevenueChart />
        </div>
        <div id="region-revenue" className="grid md:grid-cols-2 gap-2">
        <RegionRevenueChart />
      </div>

      
      <div id="customer-analysis">
        <CustomerConcentrationChart />
      </div>
    </div>
  );
};

export default Dashboard;
