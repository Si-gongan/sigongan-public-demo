/** @jsxImportSource @emotion/react */
import { card } from './Card.styles';

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const Card: React.FC<Props> = (props) => {
  const width = props.width || '';
  const height = props.height || '';
  return <div css={card(width, height)}>{props.children}</div>;
};

export default Card;
