import {
  LineChart,
  Line,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { History } from '../../../types/product';
import '../../../styles/price-history.css';
import { useRef, useState } from 'react';
import { calculatePriceDiff } from '../../../utils';
import CustomTooltip from './CustomTooltip';

interface Props {
  histories: History[];
}

const PriceHistory: React.FC<Props> = (props) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const windowWidth = useRef(window.innerWidth); // TODO: 훅 분리
  const isNarrow = windowWidth.current < 767;
  const histories = calculatePriceDiff(props.histories);

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

  // Recharts
  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart
        data={histories}
        margin={{
          top: 16,
          right: isNarrow ? 8 : 32,
          left: 8,
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
        <Tooltip content={CustomTooltip} />
        <ReferenceLine
          y={histories[histories.length - 1].price}
          stroke={isMouseEnter ? '#c4c4c4' : '#e4e4e4'}
          strokeDasharray="2 2"
        />
        <Line
          dataKey="price"
          type="stepAfter"
          stroke={isMouseEnter ? '#a6bbfb' : '#c4c4c4'}
          strokeWidth="1.5"
          // strokeOpacity={isMouseEnter ? 0.5 : 1}
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
