/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { categories } from '../../utils';
import BestProducts from './BestProducts';
import { CategoryId } from '../../types/product';
import * as styles from './Main.styles';

// TODO: SSR
const Main: React.FC = () => {
  const [categoryId, setCategoryId] = useState<CategoryId>('1001');

  return (
    <div css={styles.main}>
      <h2 css={styles.title}>카테고리 별 인기 상품</h2>
      <div
        style={{
          overflowX: 'scroll',
        }}
      >
        <div css={styles.categories}>
          {categories.map((category) => {
            return (
              <button
                key={category.id}
                css={styles.btn(category.id === categoryId)}
                onClick={() => setCategoryId(category.id)}
              >
                <div css={styles.categoryIcon}>{category.icon}</div>
                <div css={styles.categoryText}>{category.title}</div>
              </button>
            );
          })}
        </div>
      </div>
      <BestProducts
        category={
          categories.find((category) => category.id === categoryId) ||
          categories[0]
        }
      />
    </div>
  );
};

export default Main;
