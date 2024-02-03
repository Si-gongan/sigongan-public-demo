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
          <NavLink
            to="/"
            css={styles.logo}
            aria-label="픽포미 로고"
            role="button"
          >
            <img src={logoImage} alt="" />
          </NavLink>
        </div>
        {/* Search */}
        <div css={styles.searchBarWrapper}>
          <SearchBar />
        </div>
        {/* Navigation */}
        <div>
          <div css={styles.navMenu}>
            <div css={styles.navItem}>
              <NavLink
                to="/chat"
                css={styles.navLink}
                aria-label="AI 채팅"
                role="button"
              >
                <BiSolidMessageSquareDetail />
              </NavLink>
            </div>
            <div css={styles.navItem}>
              <ThemeButton />
            </div>
          </div>
        </div>
      </RootNav>
    </>
  );
};

export default MainNavBar;
