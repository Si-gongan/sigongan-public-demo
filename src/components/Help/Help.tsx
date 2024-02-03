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
        {/* 모달 */}
        {isVisibleContent && (
          <HelpContent
            closeHandler={closeHandler}
            isVisibleContent={isVisibleContent}
          />
        )}
        {/* 버튼 */}
        <div css={styles.btnContainer}>
          <button
            css={styles.btn}
            onClick={toggleHandler}
            aria-label={isVisibleContent ? '도움말 닫기' : '도움말'}
          >
            {isVisibleContent ? <BsX strokeWidth={0.4} /> : <BsQuestionLg />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Help;
