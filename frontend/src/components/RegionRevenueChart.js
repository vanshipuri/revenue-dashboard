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

const RegionRevenueChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/data/D")
      .then((res) => {
        const cleanedData = res.data.filter(item => item["Yearly Revenue"] !== null);
        setData(cleanedData);
      })
      .catch((err) => console.error("Failed to fetch region revenue data", err));
  }, []);

  return (
    <div>
      <h3>Region-wise Revenue Analysis</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Region" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Yearly Revenue" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RegionRevenueChart;
