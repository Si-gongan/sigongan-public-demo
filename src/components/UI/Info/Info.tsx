/** @jsxImportSource @emotion/react */
import * as styles from './Info.styles';
import { InfoProps } from './types';

const Info: React.FC<InfoProps> = ({ infoData }) => {
  return (
    <div>
      {infoData.map((data, index) => (
        <div css={styles.metaList} key={index}>
          <span css={styles.metaListTitle} aria-label={data.label}>
            {data.title}
          </span>
          <div css={styles.metaListText}>{data.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Info;
