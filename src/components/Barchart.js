import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    date: "14/11/2019",
    food: 1050,
    cloth: 500,
    medical: 500,
    amt: 2050
  },
  {
    date: "13/11/2019",
    food: 2000,
    cloth: 1000,
    medical: 100,
    amt: 3100
  },
  {
    date: "11/11/2019",
    food: 1950,
    cloth: 500,
    medical: 1400,
    amt: 3850
  }
];

export default function Barchart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="food" stackId="a" fill="#0088FE" />
        <Bar dataKey="cloth" stackId="a" fill="#00C49F" />
        <Bar dataKey="medical" stackId="a" fill="#FFBB28" />
      </BarChart>
    </ResponsiveContainer>
  );
}
