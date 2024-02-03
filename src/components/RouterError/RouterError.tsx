/** @jsxImportSource @emotion/react */
import { FaTriangleExclamation } from 'react-icons/fa6';
import * as styles from './RouterError.styles';

const RouterError: React.FC = () => {
  return (
    <div css={styles.container}>
      <FaTriangleExclamation size={40} />
      <h2 css={styles.title} role="heading">
        요청하신 페이지가 없습니다.
      </h2>
    </div>
  );
};

export default RouterError;
