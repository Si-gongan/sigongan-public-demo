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
import { useTheme } from '@emotion/react';

interface Props {
  histories: History[];
}

const PriceHistory: React.FC<Props> = (props) => {
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
          stroke={theme.lineChart.primary}
          padding={{ left: 4, right: 4 }}
          tickFormatter={formatXAxis}
        />
        <YAxis
          tickLine={false}
          domain={['dataMin', 'dataMax']}
          stroke={theme.lineChart.primary}
          padding={{ bottom: 20, top: 8 }}
          tickFormatter={formatYAxis}
          hide={isNarrow}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ stroke: theme.lineChart.secondary }}
        />
        <ReferenceLine
          y={histories[histories.length - 1].price}
          stroke={
            isMouseEnter ? theme.lineChart.primary : theme.lineChart.secondary
          }
          strokeDasharray="2 2"
        />
        <Line
          dataKey="price"
          type="stepAfter"
          stroke={
            isMouseEnter
              ? theme.lineChart.secondaryBlue
              : theme.lineChart.primary
          }
          strokeWidth="1.5"
          dot={{
            fill: isMouseEnter
              ? theme.lineChart.primaryBlue
              : theme.lineChart.primary,
            stroke: theme.lineChart.dotStroke,
            strokeWidth: 1,
            r: 2,
          }}
          activeDot={{
            fill: theme.lineChart.primaryBlue,
            stroke: theme.lineChart.dotStroke,
            strokeWidth: 2,
            r: 4,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceHistory;
