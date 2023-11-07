/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom';
import * as styles from './NavigationBar.style';
import { BiSolidHeart, BiSolidUser } from 'react-icons/bi';
import logo from '../../assets/logo/pickforme-logo.jpg';
import SearchBar from './SearchBar';
import ResponsiveContainer from '../UI/Layout/ResponsiveContainer';
import useScroll from '../../hooks/useScroll';

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
          <div style={{ flexGrow: 1 }}>
            <SearchBar />
          </div>
          {/* Navigation */}
          <div>
            <ul css={styles.navMenu}>
              <li css={styles.navItem}>
                <NavLink to="/test" css={styles.navLink}>
                  <BiSolidHeart />
                </NavLink>
              </li>
              <li css={styles.navItem}>
                <NavLink to="/test" css={styles.navLink}>
                  <BiSolidUser />
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </ResponsiveContainer>
    </header>
  );
};

export default NavigationBar;