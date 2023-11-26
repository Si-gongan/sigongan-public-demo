/** @jsxImportSource @emotion/react */
import * as styles from './Help.styles';
import { useState } from 'react';
import HelpContent from './Content';
import { BsQuestionLg, BsX } from 'react-icons/bs';

const Help: React.FC = () => {
  const [isVisibleContent, setIsVisibleContent] = useState(false);

  const toggleHandler = () => {
    setIsVisibleContent((prev) => !prev);
  };

  const closeHandler = () => {
    setIsVisibleContent(false);
  };

  return (
    <>
      <div css={styles.backdrop} onClick={closeHandler} />
      <div css={styles.container}>
        {isVisibleContent && <HelpContent />}
        <div css={styles.btnContainer}>
          <button css={styles.btn} onClick={toggleHandler} aria-label="도움말">
            {isVisibleContent ? <BsX /> : <BsQuestionLg aria-label="닫기" />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Help;
