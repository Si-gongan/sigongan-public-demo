/** @jsxImportSource @emotion/react */
import { RefObject } from 'react';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import * as styles from './ChatInput.styles';
import ResponsiveContainer from '../UI/Layout/ResponsiveContainer';

interface Props {
  inputRef: RefObject<HTMLInputElement>;
  isLoading: boolean;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ChatInput: React.FC<Props> = (props) => {
  const { inputRef, isLoading, submitHandler } = props;

  return (
    <div css={styles.inputArea}>
      <ResponsiveContainer>
        <form css={styles.form} onSubmit={submitHandler}>
          <div css={styles.inputContainer}>
            <input css={styles.input} ref={inputRef} />
          </div>
          <div>
            <button css={styles.submitBtn(isLoading)} disabled={isLoading}>
              <PiPaperPlaneRightFill size={24} css={styles.icon(isLoading)} />
            </button>
          </div>
        </form>
      </ResponsiveContainer>
    </div>
  );
};

export default ChatInput;
