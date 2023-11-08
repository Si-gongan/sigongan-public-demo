import Products from '../components/Products/Products';
import ResponsiveContainer from '../components/UI/Layout/ResponsiveContainer';

const ProductsPage: React.FC = () => {
  return (
    <>
      <ResponsiveContainer>
        <Products />
      </ResponsiveContainer>
    </>
  );
};

export default ProductsPage;
