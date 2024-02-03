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
      role="dialog"
      aria-modal="true"
    >
      {contentType === 'nav' ? (
        <ContentNav clickManual={() => setContentType('manual')} />
      ) : (
        <ContentManual clickBack={() => setContentType('nav')} />
      )}
    </div>
  );
}

export default HelpContent;
