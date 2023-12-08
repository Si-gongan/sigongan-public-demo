/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from 'react';
import { FaRegFaceSurprise } from 'react-icons/fa6';
import * as styles from './Message.styles';

const MessageError: React.FC = () => {
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    errorRef.current?.focus();
  }, []);

  return (
    <div css={styles.aiContainer} tabIndex={0} ref={errorRef}>
      <div css={styles.aiCard}>
        <div css={styles.loadingContent}>
          <FaRegFaceSurprise size={16} color="#bbb" />
          <div>AI 생성 오류가 발생했어요</div>
        </div>
      </div>
    </div>
  );
};

export default MessageError;
