import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RevenueBridgeAnalysis = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data/B')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{ width: '100%', height: 500, marginTop: 40 }}>
      <h2>Revenue Bridge and Churned Analysis</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Customer Name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Quarter 3 Revenue" stackId="a" fill="#8884d8" />
          <Bar dataKey="Quarter 4 Revenue" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Churned Revenue" fill="#ff6b6b" />
          <Bar dataKey="New Revenue" fill="#ffc658" />
          <Bar dataKey="Expansion Revenue" fill="#4caf50" />
          <Bar dataKey="Contraction Revenue" fill="#f44336" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueBridgeAnalysis;
