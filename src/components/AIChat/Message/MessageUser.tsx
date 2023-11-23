/** @jsxImportSource @emotion/react */
import * as styles from './Message.styles';

interface Props {
  text: string;
}

const MessageUser: React.FC<Props> = (props) => {
  return (
    <div css={styles.userContainer} tabIndex={0}>
      <p css={styles.userText}>{props.text}</p>
    </div>
  );
};

export default MessageUser;
