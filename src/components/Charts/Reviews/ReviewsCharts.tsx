import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./style.css";

export default function ReviewsCharts({ data }: any) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      style={{ minWidth: "250px" }}
    >
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        layout="vertical"
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" orientation="left" />
        <Bar dataKey="reviews" stackId="a" fill="#3673E8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
