import Container from './Container';
import Title from './Title';
import MainProducts from './Products';
import { Suspense } from 'react';
import Loading from './Loading';

function GoldBox() {
  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <Title>
          <span aria-hidden="true">🚨 </span>오늘 하루만! 특가 상품
          <span aria-hidden="true"> 🚨</span>
        </Title>
        <MainProducts type="gold-box" />
      </Container>
    </Suspense>
  );
}

export default GoldBox;
