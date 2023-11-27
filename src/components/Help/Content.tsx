/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import ContentNav from './ContentNav';
import ContentManual from './ContentManual';

type Content = 'nav' | 'manual';

const HelpContent: React.FC = () => {
  const [contentType, setContentType] = useState<Content>('nav');

  const clickManual = () => {
    setContentType('manual');
  };

  const clickBack = () => {
    setContentType('nav');
  };

  return (
    <>
      {contentType === 'nav' ? (
        <ContentNav clickManual={clickManual} />
      ) : (
        <ContentManual clickBack={clickBack} />
      )}
    </>
  );
};

export default HelpContent;
