/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom';
import * as styles from './NavigationBar.styles';
import { BiSolidMoon, BiSolidMessageSquareDetail } from 'react-icons/bi';
import logo from '../../assets/logo/pickforme-logo.png';
import SearchBar from './SearchBar';
import ResponsiveContainer from '../UI/Layout/ResponsiveContainer';
import useScroll from '../../hooks/useScroll';
import { useContext } from 'react';
import { ThemeContext } from '../../store/theme-context';

const NavigationBar: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { scrollDirection } = useScroll();
  const isUp = scrollDirection === 'up' ? true : false;

  return (
    <header css={styles.header(isUp, window.scrollY)}>
      <ResponsiveContainer>
        <nav css={styles.navbar}>
          {/* Logo */}
          <div>
            <NavLink to="/" css={styles.navLogo}>
              <img src={logo} alt="logo" css={styles.imgLogo} />
            </NavLink>
          </div>
          {/* Search */}
          <div css={styles.searchBarWrapper}>
            <SearchBar />
          </div>
          {/* Navigation */}
          <div>
            <ul css={styles.navMenu}>
              <li css={styles.navItem}>
                <NavLink to="/chat" css={styles.navLink} aria-label="AI 채팅">
                  <BiSolidMessageSquareDetail />
                </NavLink>
              </li>
              <li css={styles.navItem}>
                <button
                  css={styles.navBtn}
                  onClick={toggleTheme}
                  aria-label="테마 변경"
                >
                  <BiSolidMoon />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </ResponsiveContainer>
    </header>
  );
};

export default NavigationBar;
