/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { contentCard } from './ContentCard.styles';

interface Props {
  children: React.ReactNode;
}

const ContentCard: React.FC<Props> = (props) => {
  const theme = useTheme();
  return <div css={contentCard(theme)}>{props.children}</div>;
};

export default ContentCard;
