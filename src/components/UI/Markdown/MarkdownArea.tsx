/** @jsxImportSource @emotion/react */
import Markdown from 'react-markdown';
import * as styles from './markdown.style';

interface Props {
  children?: string;
}

const MarkdownArea: React.FC<Props> = (props) => {
  const { children: markdownText } = props;

  return (
    <Markdown
      components={{
        p(props) {
          const { node, ...rest } = props;
          if (node) {
            return <p css={styles.pStyle} {...rest} />;
          }
        },
        ul(props) {
          const { node, ...rest } = props;
          if (node) {
            return <ul css={styles.ulStyle} {...rest} />;
          }
        },
        li(props) {
          const { node, ...rest } = props;
          if (node) {
            return <li css={styles.liStyle} {...rest} />;
          }
        },
      }}
    >
      {markdownText}
    </Markdown>
  );
};

export default MarkdownArea;
