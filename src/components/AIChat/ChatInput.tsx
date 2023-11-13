/** @jsxImportSource @emotion/react */
import { RefObject } from 'react';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import * as styles from './ChatInput.styles';

interface Props {
  inputRef: RefObject<HTMLInputElement>;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ChatInput: React.FC<Props> = (props) => {
  const { inputRef, submitHandler } = props;

  return (
    <div css={styles.inputArea}>
      <form css={styles.form} onSubmit={submitHandler}>
        <div css={styles.inputContainer}>
          <input css={styles.input} ref={inputRef} />
        </div>
        <div>
          <button css={styles.submitBtn}>
            <PiPaperPlaneRightFill size={24} css={styles.icon} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
