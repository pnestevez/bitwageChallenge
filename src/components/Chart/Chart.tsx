import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

export type ChartProps = {
  data: Record<string, string | number>[];
  xDataKey?: string;
  lineDataKeys: { key: string; color?: string }[];
};

const Chart = ({ data, xDataKey, lineDataKeys }: ChartProps): JSX.Element => (
  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={data}>
      {xDataKey && (
        <XAxis
          dataKey={xDataKey}
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
      )}
      <Tooltip />
      <Legend />

      {lineDataKeys.map((l, i) => (
        <Line
          key={`line-${i}`}
          type="monotone"
          dataKey={l.key}
          stroke={l.color}
          activeDot={{ r: 8 }}
        />
      ))}
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
