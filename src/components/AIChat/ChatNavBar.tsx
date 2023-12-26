/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import * as styles from './ChatNavBar.styles';
import { BiArrowBack } from 'react-icons/bi';
import ResponsiveContainer from '../UI/Layout/ResponsiveContainer';
import ThemeButton from '../NavigationBar/ThemeButton';

const ChatNavBar = () => {
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
                <ThemeButton />
              </li>
            </ul>
          </div>
        </nav>
      </ResponsiveContainer>
    </header>
  );
};

export default ChatNavBar;
