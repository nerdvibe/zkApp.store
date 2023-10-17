import { useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import mock from "@/mocks/app-stats.json";

const COLORS = ["#2276FC", "#5FD5EC", "#FFBB28", "#FF8042"];

const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;

  return (
    <g>
      <text x={cx} y={cy - 20} dy={8} textAnchor="middle" fill={"white"}>
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy + 10}
        dy={8}
        textAnchor="middle"
        fill={fill}
        fontSize={"30px"}
      >
        {payload.value}%
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius-2}
        outerRadius={outerRadius+2}
        startAngle={startAngle}
        endAngle={endAngle}
        stroke="none"
        strokeWidth={2}
        fill={payload.color}
      />
    </g>
  );
};

export default function NewUsersCharts() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <PieChart width={200} height={300}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        stroke="none"
        data={mock.users}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
      >
        {mock.users.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
