import { Theme, css } from '@emotion/react';

export const container = css`
  display: flex;
  align-items: flex-start;
  width: 100%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const imgWrapper = css`
  position: relative;
  width: 40%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding-bottom: 16px;
  }
`;

export const img = css`
  width: 100%;
  max-height: 448px;
  object-fit: contain;
  padding: 0px;
`;

export const contentContainer = css`
  width: 100%;
  flex: 1;
  padding-left: 48px;

  @media screen and (max-width: 767px) {
    padding-left: 0;
  }
`;

export const mainInfoContainer = (theme: Theme) => css`
  flex-grow: 1;
  padding-bottom: 16px;
  border-top: 2px solid ${theme.color.primary};
  border-bottom: 1.2px solid ${theme.color.border};
`;

export const detailTitle = (theme: Theme) => css`
  padding: 24px 0;
  line-height: 32px;
  font-size: 24px;
  font-weight: 700;
  color: ${theme.color.text};

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

export const detailPrice = (theme: Theme) => css`
  font-size: 24px;
  font-weight: 700;
  color: ${theme.color.text};
`;

export const metaContainer = (theme: Theme) => css`
  padding: 20px 0;
  border-bottom: 1.2px solid ${theme.color.border};
`;

export const subTitle = (theme: Theme) => css`
  display: block;
  color: ${theme.color.text};
  margin-bottom: 12px;
  font-size: 16px;
`;

export const actions = css`
  display: flex;
  gap: 8px;
  padding-top: 16px;
`;

const buttonStyles = (theme: Theme) => ({
  ok: css`
    background: ${theme.mainBtn.background};
    color: ${theme.mainBtn.content};
    border: 1px solid ${theme.mainBtn.background};
    box-shadow: 10px 10px 16px 0 rgba(0, 0, 0, 0.2);
    &:hover {
      background: var(--color-blue-500);
      border: var(--color-blue-500);
    }
  `,
  cancel: css`
    background: ${theme.subBtn.background};
    color: ${theme.subBtn.content};
    border: 1.2px solid ${theme.subBtn.border};
  `,
});

export const button = (type: 'cancel' | 'ok', theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 25px;
  width: 100%;
  height: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  ${buttonStyles(theme)[type]}
`;
