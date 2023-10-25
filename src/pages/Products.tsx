import Products from '../components/Products/Products';
import SearchBar from '../components/SearchBar/SearchBar';
import BaseContainer from '../components/UI/Layout/BaseContainer';

const ProductsPage: React.FC = () => {
  return (
    <BaseContainer>
      <SearchBar />
      <Products />
    </BaseContainer>
  );
};

export default ProductsPage;
