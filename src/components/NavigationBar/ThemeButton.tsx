/** @jsxImportSource @emotion/react */
import { useRecoilState } from 'recoil';
import { BiSolidMoon } from 'react-icons/bi';
import { navBtn } from './ThemeButton.styles';
import themeState from '../../recoil/theme';
import { useState } from 'react';

const ThemeButton = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const [message, setMessage] = useState('');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    setMessage(`테마가 ${newTheme} 모드로 변경됨`);
  };

  return (
    <>
      <button css={navBtn} onClick={toggleTheme} aria-label="테마 변경">
        <BiSolidMoon />
      </button>
      <p aria-live="polite" aria-atomic="true" className="visually-hidden">
        {message}
      </p>
    </>
  );
};

export default ThemeButton;
