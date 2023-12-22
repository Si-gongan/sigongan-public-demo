/** @jsxImportSource @emotion/react */
import { useSetRecoilState } from 'recoil';
import { BiSolidMoon } from 'react-icons/bi';
import { navBtn } from './ThemeButton.styles';
import themeState from '../../recoil/theme';

const ThemeButton = () => {
  const setTheme = useSetRecoilState(themeState);

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button css={navBtn} onClick={toggleTheme} aria-label="테마 변경">
      <BiSolidMoon />
    </button>
  );
};

export default ThemeButton;
