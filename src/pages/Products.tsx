import Products from '../components/Products/Products';
import SearchBar from '../components/SearchBar/SearchBar';

const ProductsPage: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <Products />
    </div>
  );
};

export default ProductsPage;
