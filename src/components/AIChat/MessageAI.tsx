/** @jsxImportSource @emotion/react */
import { AIProduct } from '../../types/chat';
import MarkdownArea from '../UI/Markdown/MarkdownArea';
import * as styles from './Messages.style';
import RecommendedProducts from './RecommendedProducts';

interface Props {
  text: string;
  products?: AIProduct[];
}

const MessageAI: React.FC<Props> = (props) => {
  const { text, products } = props;
  return (
    <div css={styles.aiContainer}>
      <div css={styles.aiCard}>
        <div css={styles.aiContent}>
          <MarkdownArea>{text}</MarkdownArea>
          {products && <RecommendedProducts products={products} />}
        </div>
      </div>
    </div>
  );
};

export default MessageAI;
