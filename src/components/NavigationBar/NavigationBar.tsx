/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom';
import * as styles from './NavigationBar.styles';
import { BiSolidMessageSquareDetail } from 'react-icons/bi';
import logo from '../../assets/logo/pickforme-logo.png';
import SearchBar from './SearchBar';
import ResponsiveContainer from '../UI/Layout/ResponsiveContainer';
import useScroll from '../../hooks/useScroll';
import ThemeButton from './ThemeButton';

const NavigationBar: React.FC = () => {
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
                <ThemeButton />
              </li>
            </ul>
          </div>
        </nav>
      </ResponsiveContainer>
    </header>
  );
};

export default NavigationBar;
