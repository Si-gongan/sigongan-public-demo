/** @jsxImportSource @emotion/react */
import { FiSearch } from 'react-icons/fi';
import * as styles from './SearchBar.styles';
import { useContext, useRef } from 'react';
import { ProductContext } from '../../store/product-context';
import { getProducts } from '../../api/coupang/api';

const SearchBar: React.FC = () => {
  const { setNewProducts } = useContext(ProductContext);
  const userInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = userInputRef.current?.value || '';
    if (enteredText.trim().length === 0) {
      return;
    }

    const newProducts = await getProducts(enteredText);
    setNewProducts(newProducts);
    console.log(newProducts);
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
