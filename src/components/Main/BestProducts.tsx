/** @jsxImportSource @emotion/react */
import { getBestProducts } from '../../api/axios/ai/api';
import { Category } from '../../types/product';
import { useQuery } from '@tanstack/react-query';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import * as styles from './BestProducts.styles';
import { useRef } from 'react';

interface Props {
  category: Category;
}

const BestProducts: React.FC<Props> = (props) => {
  const { category } = props;
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, error } = useQuery({
    queryKey: ['best-products', { category }],
    queryFn: () => getBestProducts({ category: category.id }),
  });

  const title = `${category.description}`;
  const products = data?.products;

  const scrollHandler = (type: 'right' | 'left') => {
    if (scrollRef.current && scrollRef.current.scrollLeft !== null) {
      if (type === 'right') {
        scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
      } else {
        scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
      }
    }
  };

  if (isLoading || error) {
    return <p>loading...</p>;
  }

  return (
    <div css={styles.center}>
      <div css={styles.productsArea}>
        <h2 css={styles.title}>{title}</h2>
        <div css={styles.productsContainer}>
          <div css={styles.products} ref={scrollRef}>
            {products?.map((product) => (
              <div
                key={`${category.id}:${product.productId}`}
                css={styles.card}
              >
                <a
                  href={product.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  css={styles.link}
                  aria-label={`구매 링크. 상품명: ${product.productName}, 가격: ${product.productPrice}`}
                >
                  <div css={styles.product}>
                    <div css={styles.imageWrapper}>
                      <img
                        css={styles.image}
                        src={product.productImage}
                        alt="상품 이미지"
                      />
                    </div>
                    <div>
                      <div css={styles.contentTitle}>
                        <h3 css={styles.name}>{product.productName}</h3>
                      </div>
                      <div css={styles.contentPrice}>
                        <div css={styles.priceWrapper}>
                          {`${product.productPrice.toLocaleString()}원`}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollHandler('left')}
            css={styles.scrollBtn('left')}
          >
            <FaAngleLeft size={16} />
          </button>
          <button
            onClick={() => scrollHandler('right')}
            css={styles.scrollBtn('right')}
          >
            <FaAngleRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
