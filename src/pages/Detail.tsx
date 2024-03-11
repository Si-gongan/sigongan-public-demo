import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import SearchProductDetail from '../components/ProductDetail/Detail/SearchProduct';
import ResponsiveContainer from '../components/UI/Layout/ResponsiveContainer';
import { bannerRepo } from '../recoil/banner';
import { useParams } from 'react-router-dom';
import MainProductDetail from '../components/ProductDetail/Detail/MainProduct';

const DetailPage: React.FC = () => {
  const { id } = useParams();
  const { openBanner } = useRecoilValue(bannerRepo);

  useEffect(() => {
    openBanner();
  }, []);

  return (
    <ResponsiveContainer>
      {id?.startsWith('m') ? (
        <MainProductDetail productId={id.slice(1)} />
      ) : (
        <SearchProductDetail productId={id} />
      )}
    </ResponsiveContainer>
  );
};

export default DetailPage;
