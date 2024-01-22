/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { BiX } from 'react-icons/bi';
import * as styles from './SearchBar.styles';
import queryState from '../../recoil/query';

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const setUserQuery = useSetRecoilState(queryState);
  const [userInput, setUserInput] = useState('');
  const buttonVisible = userInput.trim().length > 0;
  // TODO: isLoading, error UI 처리

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setUserQuery(userInput);
    navigate('/products');
  };

  const resetHandler = () => {
    setUserInput('');
  };

  return (
    <form css={styles.form} onSubmit={submitHandler}>
      <div css={styles.inputContainer}>
        <label
          css={styles.label}
          htmlFor="searchInput"
          aria-label="검색어 입력창"
        />
        <input
          css={styles.input}
          type="text"
          onChange={changeHandler}
          id="searchInput"
          placeholder="상품을 검색해 보세요"
        />
        <button
          type="reset"
          css={styles.clearButton(buttonVisible)}
          onClick={resetHandler}
          aria-label="입력 초기화"
        >
          <BiX size={14} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
