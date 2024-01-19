/** @jsxImportSource @emotion/react */
import { useRecoilState } from 'recoil';
import { BiSolidMoon } from 'react-icons/bi';
import { navBtn } from './ThemeButton.styles';
import themeState from '../../recoil/theme';

const ThemeButton = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button css={navBtn} onClick={toggleTheme} aria-label="테마 변경">
      <BiSolidMoon />
    </button>
  );
};

export default ThemeButton;
