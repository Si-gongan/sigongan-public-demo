/** @jsxImportSource @emotion/react */
import { getBestProducts } from '../../../api/axios/ai/api';
import { Category } from '../../../types/product';
import { useQuery } from '@tanstack/react-query';
import Slider from '../../UI/Slider/Slider';
import Container from './Container';
import Title from './Title';
import Item from './Item';
import Loading from './Loading';

interface Props {
  category: Category;
}

const BestProducts: React.FC<Props> = ({ category }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['best-products', { category }],
    queryFn: () => getBestProducts({ category: category.id }),
  });
  const title = `${category.description}`;
  const products = data?.products;

  // TODO: error

  if (isLoading) {
    return (
      <Container>
        <Title>{title}</Title>
        <Loading />
      </Container>
    );
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
