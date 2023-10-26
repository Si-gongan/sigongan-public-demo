/** @jsxImportSource @emotion/react */
import { container } from './ResponsiveContainer.styles';

interface ContainerProps {
  children: React.ReactNode;
}

const ResponsiveContainer: React.FC<ContainerProps> = (props) => {
  return <div css={container}>{props.children}</div>;
};

export default ResponsiveContainer;
