import axios from 'axios';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import { LoaderFunction, json } from 'react-router-dom';
import { ProductResponseModel } from '../api/coupang/types';
import ResponsiveContainer from '../components/UI/Layout/ResponsiveContainer';

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
  const apiUrl = process.env.REACT_APP_COUPANG_API_URL;
  const id = params.id;
  try {
    const response = await axios.get<ProductResponseModel>(`${apiUrl}/${id}`);
    return response.data.product;
  } catch (error) {
    console.error(error);
    throw json(
      { message: 'Could not fetch details for selected event' },
      { status: 500 }
    );
  }
};
