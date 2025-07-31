import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const CustomerConcentrationChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data/E')
      .then(response => {
        const filtered = response.data.filter(entry => entry['Customer Name'] && entry['Total Revenue']);
        setData(filtered.slice(0, 15)); // show top 15 customers
      })
      .catch(error => {
        console.error('Failed to fetch customer concentration data', error);
      });
  }, []);

  return (
    <div className="chart-card">
      <h3 className="chart-title">Top Customers by Revenue</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="Customer Name" />
          <Tooltip />
          <Bar dataKey="Total Revenue" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomerConcentrationChart;
