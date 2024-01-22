/** @jsxImportSource @emotion/react */
import { Suspense } from 'react';
import { Category } from '../../../types/product';
import Container from './Container';
import Title from './Title';
import Loading from './Loading';
import MainProducts from './Products';

interface Props {
  category: Category;
}

function BestProducts({ category }: Props) {
  const title = `${category.description}`;

  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <Title>{title}</Title>
        <MainProducts type="best-products" category={category} />
      </Container>
    </Suspense>
  );
}

export default BestProducts;
