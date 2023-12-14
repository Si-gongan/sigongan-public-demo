/** @jsxImportSource @emotion/react */
import { getBestProducts } from '../../../api/axios/ai/api';
import { Category } from '../../../types/product';
import { useQuery } from '@tanstack/react-query';
import Slider from '../../UI/Slider/Slider';
import Container from './Container';
import Title from './Title';
import Item from './Item';

interface Props {
  category: Category;
}

const BestProducts: React.FC<Props> = ({ category }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['best-products', { category }],
    queryFn: () => getBestProducts({ category: category.id }),
  });
  const title = `${category.description}`;
  const products = data?.products;

  if (isLoading || error) {
    return <p>loading...</p>;
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
