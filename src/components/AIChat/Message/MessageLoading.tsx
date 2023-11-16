/** @jsxImportSource @emotion/react */
import { HashLoader } from 'react-spinners';
import * as styles from './Message.styles';
import { useTheme } from '@emotion/react';

const MessageLoading: React.FC = () => {
  const theme = useTheme();

  return (
    <div css={styles.aiContainer}>
      <div css={styles.aiCard}>
        <div css={styles.loadingContent}>
          <HashLoader color={theme.chatPrimary3} loading size={16} />
          <div>답변을 생성하고 있어요</div>
        </div>
      </div>
    </div>
  );
};

export default MessageLoading;
