import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const CountryRevenueChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://revenue-dashboard-2.onrender.com/api/data/C')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error("Failed to fetch country revenue data", err));
  }, []);

  return (
    <div>
      <h3>Country-wise Revenue Analysis</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Country" angle={-45} textAnchor="end" interval={0} height={100} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Yearly Revenue" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CountryRevenueChart;
