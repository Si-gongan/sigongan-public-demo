/** @jsxImportSource @emotion/react */
import { getBestProducts } from '../../../api/axios/ai/api';
import { Category } from '../../../types/product';
import { useSuspenseQuery } from '@tanstack/react-query';
import Slider from '../../UI/Slider/Slider';
import Container from './Container';
import Title from './Title';
import Item from './Item';

interface Props {
  category: Category;
}

const BestProducts: React.FC<Props> = ({ category }) => {
  const { data, error } = useSuspenseQuery({
    queryKey: ['best-products', { category }],
    queryFn: () => getBestProducts({ category: category.id }),
  });
  const title = `${category.description}`;
  const products = data?.products;

  if (error) {
    throw new Error('Best products fetching Error');
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Slider>
        {products?.map((product) => (
          <Item
            key={`${product.rank}-${product.productId}`}
            product={product}
          />
        ))}
      </Slider>
    </Container>
  );
};

export default BestProducts;
