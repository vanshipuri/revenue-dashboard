import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const QuarterlyRevenueChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://revenue-dashboard-2.onrender.com/api/data/A')
      .then((res) => {
        const rawData = res.data;

        // Aggregate revenue across customers per quarter
        const q3Total = rawData.reduce((sum, item) => sum + (item["Quarter 3 Revenue"] || 0), 0);
        const q4Total = rawData.reduce((sum, item) => sum + (item["Quarter 4 Revenue"] || 0), 0);
        const qoqGrowth = q3Total === 0 ? 0 : ((q4Total - q3Total) / q3Total) * 100;

        const transformed = [
          { quarter: "Q3", revenue: q3Total, qoq_growth: 0 },
          { quarter: "Q4", revenue: q4Total, qoq_growth: qoqGrowth }
        ];

        setData(transformed);
      })
      .catch((err) => console.error("Error loading chart data:", err));
  }, []);

  return (
    <div>
      <h3>Quarterly Revenue and QoQ Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          <Line type="monotone" dataKey="qoq_growth" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default QuarterlyRevenueChart;

