import ProductDetail from '../components/ProductDetail/ProductDetail';
import { LoaderFunction, json } from 'react-router-dom';
import ResponsiveContainer from '../components/UI/Layout/ResponsiveContainer';
import coupangApi from '../api/coupang/api';

const DetailPage: React.FC = () => {
  return (
    <ResponsiveContainer>
      <ProductDetail />
    </ResponsiveContainer>
  );
};

export default DetailPage;

// TEST
export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  try {
    const { data } = await coupangApi.getProduct(id);
    console.log(data);
    return data.product;
  } catch (error) {
    console.error(error);
    throw json(
      { message: 'Could not fetch details for selected product' },
      { status: 500 }
    );
  }
};
