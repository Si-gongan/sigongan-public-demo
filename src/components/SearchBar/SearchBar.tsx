/** @jsxImportSource @emotion/react */
import { FiSearch } from 'react-icons/fi';
import * as styles from './SearchBar.styles';
import { AxiosError } from 'axios';

interface Props {
  isLoading: boolean;
  error?: AxiosError;
  submitHandler: (event: React.FormEvent) => void;
  setUserInput: (value: string) => void;
}

const SearchBar: React.FC<Props> = (props) => {
  const { submitHandler, setUserInput } = props;
  // TODO: isLoading, error UI 처리

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  return (
    <form css={styles.form} onSubmit={submitHandler}>
      <div css={styles.inputContainer}>
        <input css={styles.input} type="text" onChange={changeHandler} />
        <button css={styles.searchButton}>
          <FiSearch css={styles.icon} size={16} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
