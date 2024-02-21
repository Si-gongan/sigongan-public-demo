/** @jsxImportSource @emotion/react */
import { useRef, useState } from 'react';
import ContentNav from './ContentNav';
import ContentManual from './ContentManual';
import useTrapFocus from '../../hooks/useTrapFocus';
import { content } from './Content.styles';

type Content = 'nav' | 'manual';

interface Props {
  closeHandler: () => void;
  isVisibleContent: boolean;
}

function HelpContent({ closeHandler, isVisibleContent }: Props) {
  const [contentType, setContentType] = useState<Content>('nav');
  const contentRef = useRef<HTMLDivElement>(null);

  useTrapFocus(contentRef, closeHandler, [contentType, isVisibleContent]);

  return (
    <div
      css={content}
      ref={contentRef}
      tabIndex={-1}
      aria-label="도움말"
      aria-describedby="close-help"
      role="dialog"
      aria-modal="true"
    >
      <p className="visually-hidden" id="close-help">
        도움말을 닫으려면 Esc 키를 누르세요
      </p>
      {contentType === 'nav' ? (
        <ContentNav clickManual={() => setContentType('manual')} />
      ) : (
        <ContentManual clickBack={() => setContentType('nav')} />
      )}
    </div>
  );
}

export default HelpContent;
