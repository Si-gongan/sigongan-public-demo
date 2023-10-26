/** @jsxImportSource @emotion/react */
import { FiSearch } from 'react-icons/fi';
import * as styles from './SearchBar.styles';
import { useContext, useRef } from 'react';
import { ProductContext } from '../../store/product-context';
import coupangApi from '../../api/coupang/api';
import { ProductsResponseModel } from '../../api/coupang/types';

const SearchBar: React.FC = () => {
  const { setNewProducts } = useContext(ProductContext);
  const userInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = userInputRef.current?.value || '';
    if (enteredText.trim().length === 0) {
      return;
    }
    try {
      const { data } = await coupangApi.getProducts(enteredText);
      setNewProducts(
        data.products.map((product: ProductsResponseModel) => ({
          id: product.id,
          title: product.name,
          image: product.thumbnail,
          price: product.price,
          url: product.url,
        }))
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form css={styles.form} onSubmit={submitHandler}>
      <div css={styles.inputContainer}>
        <input css={styles.input} type="text" ref={userInputRef} />
        <button css={styles.searchButton}>
          <FiSearch css={styles.icon} size={16} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
