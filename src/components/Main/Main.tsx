/** @jsxImportSource @emotion/react */
import BestProducts from './Products/BestProducts';
import * as styles from './Main.styles';
import useCategory from '../../hooks/useCategory';
import Categories from './Categories/Categories';
import GoldBox from './Products/GoldBox';

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
      <BestProducts category={selectedCategory} />
      <GoldBox />
    </div>
  );
};

export default Main;
