/** @jsxImportSource @emotion/react */
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import useCategory from '../../hooks/useCategory';
import BestProducts from './Products/BestProducts';
import * as styles from './Main.styles';
import Categories from './Categories/Categories';
import GoldBox from './Products/GoldBox';
import Loading from './Products/Loading';
import Error from './Products/Error';

// TODO: SSR
const Main: React.FC = () => {
  const { selectedCategory, selectCategory } = useCategory();

  return (
    <div css={styles.main}>
      <h2 css={styles.title}>카테고리 별 인기 상품</h2>
      <Categories
        selectedCategory={selectedCategory}
        selectCategory={selectCategory}
      />
      <ErrorBoundary FallbackComponent={Error}>
        <BestProducts category={selectedCategory} />
        <Suspense fallback={<Loading />}>
          <GoldBox />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Main;
