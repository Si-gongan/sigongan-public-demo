/** @jsxImportSource @emotion/react */
import { AIProduct } from '../../../types/chat';
import MarkdownArea from '../../UI/Markdown/MarkdownArea';
import * as styles from './Message.styles';
import RecommendedProducts from '../RecommendedProducts';
import { useEffect } from 'react';

interface Props {
  text: string;
  products?: AIProduct[];
  answerRef?: React.RefObject<HTMLDivElement>;
}

const MessageAI: React.FC<Props> = (props) => {
  const { text, products, answerRef } = props;
  useEffect(() => {
    answerRef?.current?.focus();
  }, []);

  return (
    <div css={styles.aiContainer}>
      <div css={styles.aiCard} tabIndex={0} ref={answerRef}>
        <div css={styles.aiContent}>
          <MarkdownArea>{text}</MarkdownArea>
          {products && <RecommendedProducts products={products} />}
        </div>
      </div>
    </div>
  );
};

export default MessageAI;
