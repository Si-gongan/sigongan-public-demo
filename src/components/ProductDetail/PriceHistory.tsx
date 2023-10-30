import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { History } from '../../types/product';
import '../../styles/price-history.css';
import { useRef, useState } from 'react';

interface Props {
  histories: History[];
}

const PriceHistory: React.FC<Props> = (props) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const windowWidth = useRef(window.innerWidth); // TODO: 훅 분리
  const isNarrow = windowWidth.current < 767;

  // Mouse Event Handler
  const mouseEnterHandler = () => {
    setIsMouseEnter(true);
  };

  const mouseOutHandler = () => {
    setIsMouseEnter(false);
  };

  // Formatter
  const formatXAxis = (xTick: string) => {
    return `${xTick.substring(4, 6)}/${xTick.toString().substring(6, 8)}`;
  };

  const formatYAxis = (yTick: number) => {
    return `${yTick.toLocaleString()}`;
  };

  const formatTooltip = (value: number) => {
    return [`${value.toLocaleString()}원`];
  };

  const formatTooltipLabel = (value: string) => {
    return `${value.toString().substring(4, 6)}월 ${value
      .toString()
      .substring(6, 8)}일 가격 정보`;
  };

  // Recharts
  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart
        data={props.histories}
        margin={{
          top: 16,
          right: isNarrow ? 0 : 32,
          left: 0,
          bottom: 8,
        }}
        onMouseEnter={mouseEnterHandler}
        onMouseMove={mouseEnterHandler}
        onMouseLeave={mouseOutHandler}
      >
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis
          dataKey="createdAt"
          type="category"
          domain={['dataMin', 'dataMax']}
          tickLine={false}
          stroke="#c4c4c4"
          padding={{ left: 4, right: 4 }}
          tickFormatter={formatXAxis}
        />
        <YAxis
          tickLine={false}
          domain={['dataMin', 'dataMax']}
          stroke="#c4c4c4"
          padding={{ bottom: 20, top: 8 }}
          tickFormatter={formatYAxis}
          hide={isNarrow}
        />
        <Tooltip
          formatter={formatTooltip}
          labelFormatter={formatTooltipLabel}
          wrapperStyle={{ fontSize: '12px', textAlign: 'left' }}
          labelStyle={{
            fontSize: '12px',
            marginBottom: '8px',
            fontWeight: 700,
            color: '#555',
          }}
          contentStyle={{ fontWeight: 700, color: '#5983fc' }}
          cursor={{ stroke: '#eee', strokeWidth: 1 }}
        />
        <Line
          dataKey="price"
          type="stepAfter"
          stroke={isMouseEnter ? '#5983fc' : '#c4c4c4'}
          strokeWidth="1.5"
          strokeOpacity={isMouseEnter ? 0.5 : 1}
          dot={{
            fill: isMouseEnter ? '#5983fc' : '#c4c4c4',
            stroke: '#fff',
            strokeWidth: 1,
            r: 2,
          }}
          activeDot={{ fill: '#5983fc', strokeWidth: 2, r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceHistory;
