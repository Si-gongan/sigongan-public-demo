/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom';
import * as styles from './MainNavBar.styles';
import { BiSolidMessageSquareDetail } from 'react-icons/bi';
import logoImage from '../../assets/logo/pickforme-logo.png';
import SearchBar from './SearchBar';
import ThemeButton from './ThemeButton';
import RootNav from './RootNav';

const MainNavBar: React.FC = () => {
  return (
    <>
      <RootNav>
        {/* Logo */}
        <div>
          <NavLink to="/" css={styles.logo}>
            <img src={logoImage} alt="logo" />
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
      </RootNav>
    </>
  );
};

export default MainNavBar;
