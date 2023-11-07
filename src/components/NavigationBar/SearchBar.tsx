/** @jsxImportSource @emotion/react */
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../store/product-context';
import { BiX } from 'react-icons/bi';
import * as styles from './SearchBar.styles';

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const { setUserQuery, resetProducts } = useContext(ProductContext);
  const [userInput, setUserInput] = useState('');
  const buttonVisible = userInput.trim().length > 0;
  // TODO: isLoading, error UI 처리

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    resetProducts();
    setUserQuery(userInput);
    navigate('/products');
  };

  const resetHandler = () => {
    setUserInput('');
  };

  return (
    <form css={styles.form} onSubmit={submitHandler}>
      <div css={styles.inputContainer}>
        <input css={styles.input} type="text" onChange={changeHandler} />
        <button
          type="reset"
          css={styles.clearButton(buttonVisible)}
          onClick={resetHandler}
        >
          <BiX size={18} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;