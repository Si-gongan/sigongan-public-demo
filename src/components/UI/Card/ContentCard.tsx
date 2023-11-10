/** @jsxImportSource @emotion/react */
import { contentCard } from './ContentCard.styles';

interface Props {
  children: React.ReactNode;
}

const ContentCard: React.FC<Props> = (props) => {
  return <div css={contentCard}>{props.children}</div>;
};

export default ContentCard;
