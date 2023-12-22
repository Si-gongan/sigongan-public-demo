/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BarLoader } from 'react-spinners';

const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 376px;
`;

const Loading = () => {
  return (
    <div css={container}>
      <BarLoader color="#aaa" speedMultiplier={1.2} />
    </div>
  );
};

export default Loading;
