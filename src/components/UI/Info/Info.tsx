/** @jsxImportSource @emotion/react */
import * as styles from './Info.styles';
import { InfoProps } from './types';

const Info: React.FC<InfoProps> = ({ infoData }) => {
  const infoList = infoData.map((data, index) => (
    <li css={styles.metaList} key={index}>
      <span css={styles.metaListTitle} aria-label={data.label}>
        {data.title}
      </span>
      <div css={styles.metaListText}>{data.description}</div>
    </li>
  ));
  return <ul>{infoList}</ul>;
};

export default Info;
