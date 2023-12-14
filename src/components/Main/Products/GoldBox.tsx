import { useQuery } from '@tanstack/react-query';
import Slider from '../../UI/Slider/Slider';
import Container from './Container';
import Title from './Title';
import { getGoldBoxProducts } from '../../../api/axios/ai/api';
import Item from './Item';
import Loading from './Loading';

const GoldBox = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['gold-box'],
    queryFn: getGoldBoxProducts,
  });
  const products = data?.products;

  if (isLoading) {
    return (
      <Container>
        <Title>이런 상품은 어때요?</Title>
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      <Title>이런 상품은 어때요?</Title>
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
