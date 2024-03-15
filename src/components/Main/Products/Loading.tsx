/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BarLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 504px;
      `}
    >
      <BarLoader color="#aaa" speedMultiplier={1.2} />
    </div>
  );
};

export default Loading;
