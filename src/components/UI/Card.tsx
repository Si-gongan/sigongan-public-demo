/** @jsxImportSource @emotion/react */
import { card } from './Card.styles';

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
  maxWidth?: string;
}

const Card: React.FC<Props> = (props) => {
  const width = props.width || undefined;
  const height = props.height || undefined;
  const maxWidth = props.maxWidth || undefined;
  return <div css={card(width, height, maxWidth)}>{props.children}</div>;
};

export default Card;
