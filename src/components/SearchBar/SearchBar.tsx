/** @jsxImportSource @emotion/react */
import { FiSearch } from 'react-icons/fi';
import {
  form,
  icon,
  input,
  inputContainer,
  searchButton,
} from './SearchBar.styles';
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
    <form css={form} onSubmit={submitHandler}>
      <div css={inputContainer}>
        <input css={input} type="text" ref={userInputRef} />
        <button css={searchButton}>
          <FiSearch css={icon} size={16} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
