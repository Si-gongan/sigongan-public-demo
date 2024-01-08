/** @jsxImportSource @emotion/react */
import { Suspense } from 'react';
import { getBestProducts } from '../../../api/axios/ai/api';
import { Category } from '../../../types/product';
import { useSuspenseQuery } from '@tanstack/react-query';
import Slider from '../../UI/Slider/Slider';
import Container from './Container';
import Title from './Title';
import Item from './Item';
import Loading from './Loading';

interface Props {
  category: Category;
}

export default function BestProducts({ category }: Props) {
  const title = `${category.description}`;

  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <Title>{title}</Title>
        <BestProductsSlider category={category} />
      </Container>
    </Suspense>
  );
}

function BestProductsSlider({ category }: Props) {
  const { data, error } = useSuspenseQuery({
    queryKey: ['best-products', { category }],
    queryFn: () => getBestProducts({ category: category.id }),
  });
  const products = data.products;

  if (error) {
    throw new Error('Best products fetching Error');
  }

  return (
    <Slider>
      {products.map((product) => (
        <Item key={`${product.rank}-${product.productId}`} product={product} />
      ))}
    </Slider>
  );
}
