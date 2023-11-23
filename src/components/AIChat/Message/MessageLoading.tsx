/** @jsxImportSource @emotion/react */
import { HashLoader } from 'react-spinners';
import * as styles from './Message.styles';
import { useTheme } from '@emotion/react';
import { useEffect, useRef } from 'react';

const MessageLoading: React.FC = () => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    loadingRef.current?.focus();
  }, []);

  return (
    <div css={styles.aiContainer} tabIndex={0} ref={loadingRef}>
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
