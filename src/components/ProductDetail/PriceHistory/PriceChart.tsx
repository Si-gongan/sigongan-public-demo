import { useTheme } from '@emotion/react';
import { useRef, useState } from 'react';
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
import { calculatePriceDiff } from '../../../utils';
import { History } from '../../../types/product';
import CustomTooltip from './CustomTooltip';
import '../../../styles/price-history.css';

interface Props {
  histories: History[];
}

const PriceChart: React.FC<Props> = (props) => {
  const theme = useTheme();
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
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={histories}
        margin={{
          top: 32,
          right: isNarrow ? 8 : 64,
          left: isNarrow ? 8 : 0,
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
          stroke={theme.accent2}
          padding={{ left: 4, right: 4 }}
          tickFormatter={formatXAxis}
        />
        <YAxis
          tickLine={false}
          domain={['dataMin', 'dataMax']}
          stroke={theme.accent2}
          padding={{ bottom: 20, top: 8 }}
          tickFormatter={formatYAxis}
          hide={isNarrow}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ stroke: theme.accent1 }}
        />
        <ReferenceLine
          y={histories[histories.length - 1].price}
          stroke={isMouseEnter ? theme.accent2 : theme.accent1}
          strokeDasharray="2 2"
        />
        <Line
          dataKey="price"
          type="stepAfter"
          stroke={isMouseEnter ? theme.primary1 : theme.accent2}
          strokeWidth="1.5"
          dot={{
            fill: isMouseEnter ? theme.primary2 : theme.accent2,
            stroke: theme.backgroundBase,
            strokeWidth: 1,
            r: 2,
          }}
          activeDot={{
            fill: theme.primary2,
            stroke: theme.backgroundBase,
            strokeWidth: 2,
            r: 4,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceChart;
