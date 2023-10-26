/** @jsxImportSource @emotion/react */
import { reportCard } from './ReportCard.styles';

interface Props {
  children: React.ReactNode;
}

const ReportCard: React.FC<Props> = (props) => {
  return <div css={reportCard}>{props.children}</div>;
};

export default ReportCard;
