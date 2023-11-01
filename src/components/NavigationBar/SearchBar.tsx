/** @jsxImportSource @emotion/react */
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../store/product-context';
import * as styles from './SearchBar.styles';

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const { setUserQuery } = useContext(ProductContext);
  const [userInput, setUserInput] = useState('');
  // TODO: isLoading, error UI 처리

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setUserQuery(userInput);
    navigate('/products');
  };

  return (
    <form css={styles.form} onSubmit={submitHandler}>
      <div css={styles.inputContainer}>
        <input css={styles.input} type="text" onChange={changeHandler} />
        {/* X BUTTON */}
        {/* <button css={styles.searchButton}>
          <FiSearch css={styles.icon} size={16} />
        </button> */}
      </div>
    </form>
  );
};

export default SearchBar;
