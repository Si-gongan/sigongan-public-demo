import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import ResponsiveContainer from '../components/UI/Layout/ResponsiveContainer';
import { bannerRepo } from '../recoil/banner';

const DetailPage: React.FC = () => {
  const { openBanner } = useRecoilValue(bannerRepo);

  useEffect(() => {
    openBanner();
  }, []);

  return (
    <ResponsiveContainer>
      <ProductDetail />
    </ResponsiveContainer>
  );
};

export default DetailPage;
