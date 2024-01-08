/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FaRegFaceSurprise } from 'react-icons/fa6';

const Error = () => {
  return (
    <div
      css={css`
        display: flex;
        gap: 16px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 467px;
      `}
    >
      <FaRegFaceSurprise size={20} color="#bbb" />
      <p
        css={css`
          color: var(--text3);
          font-size: 14px;
          font-weight: 500;
          word-break: keep-all;
        `}
      >
        서버에 오류가 발생했어요. 다시 시도해 주세요.
      </p>
    </div>
  );
};

export default Error;
