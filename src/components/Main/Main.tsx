/** @jsxImportSource @emotion/react */
import { ErrorBoundary } from 'react-error-boundary';
import useCategory from '../../hooks/useCategory';
import BestProducts from './Products/BestProducts';
import * as styles from './Main.styles';
import Categories from './Categories/Categories';
import GoldBox from './Products/GoldBox';
import Error from './Products/Error';

// TODO: SSR
const Main: React.FC = () => {
  const { selectedCategory, selectCategory } = useCategory();

  return (
    <div css={styles.main}>
      <Categories
        selectedCategory={selectedCategory}
        selectCategory={selectCategory}
      />
      <ErrorBoundary FallbackComponent={Error}>
        <BestProducts category={selectedCategory} />
        <GoldBox />
      </ErrorBoundary>
    </div>
  );
};

export default Main;
