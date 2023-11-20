/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import * as styles from './ChatNavBar.styles';
import { BiArrowBack, BiSolidMoon } from 'react-icons/bi';
import { useContext } from 'react';
import { ThemeContext } from '../../store/theme-context';
import ResponsiveContainer from '../UI/Layout/ResponsiveContainer';

const ChatNavBar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header css={styles.header}>
      <ResponsiveContainer>
        <nav css={styles.navbar}>
          <div>
            <div>
              <Link to=".." css={styles.navLink} aria-label="뒤로가기">
                <BiArrowBack />
              </Link>
            </div>
          </div>
          <div>
            <ul css={styles.navMenu}>
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

export default ChatNavBar;
