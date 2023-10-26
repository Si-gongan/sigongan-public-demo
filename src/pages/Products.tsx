import Products from '../components/Products/Products';
import SearchBar from '../components/SearchBar/SearchBar';
import ResponsiveContainer from '../components/UI/Layout/ResponsiveContainer';

const ProductsPage: React.FC = () => {
  return (
    <ResponsiveContainer>
      <SearchBar />
      <Products />
    </ResponsiveContainer>
  );
};

export default ProductsPage;
