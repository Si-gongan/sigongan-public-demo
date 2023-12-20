import { useSuspenseQuery } from '@tanstack/react-query';
import { getGoldBoxProducts } from '../../../api/axios/ai/api';
import Slider from '../../UI/Slider/Slider';
import Container from './Container';
import Title from './Title';
import Item from './Item';

const GoldBox = () => {
  const { data, error } = useSuspenseQuery({
    queryKey: ['gold-box'],
    queryFn: getGoldBoxProducts,
  });
  const products = data?.products;

  if (error) {
    throw new Error('Gold box products fetching Error');
  }

  return (
    <Container>
      <Title>🚨 오늘 하루만! 특가 상품 🚨</Title>
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

export default GoldBox;
