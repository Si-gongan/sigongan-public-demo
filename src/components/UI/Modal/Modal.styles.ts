import { css } from '@emotion/react';

export const backdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 990;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
`;

export const modal = css`
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 480px;
  width: 80%;
  background-color: var(--background2);
  color: var(--text1);
  padding: 16px;
  border: 1px solid var(--border1);
  border-radius: 14px;
  z-index: 999;
  transform: translate(-50%, -50%);
  animation: slide-up 300ms ease-out forwards;

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(32px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;
