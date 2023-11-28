import { css } from '@emotion/react';

export const switchers = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 32px;
  margin-bottom: 16px;
`;

export const btnColor = {
  active: css`
    background: var(--background-emp);
    border: 1px solid var(--background-emp);
    color: var(--text-emp);
  `,
  inactive: css`
    background: var(--chat-background);
    border: 1px solid var(--chat-background);
    color: var(--text1);
  `,
};

export const button = (active: boolean, disabled?: boolean) => css`
  ${active ? btnColor['active'] : btnColor['inactive']}
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin: 4px;
  border-radius: 32px;
  font-weight: 600;
  font-size: 14px;
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: ${disabled ? 'non' : 'translateY(-2px)'};
  }
`;

export const contentContainer = css`
  padding-top: 16px;
`;
