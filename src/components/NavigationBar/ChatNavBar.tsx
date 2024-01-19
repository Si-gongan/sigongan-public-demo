/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { navLink, navMenu, navItem } from './ChatNavBar.styles';
import { BiArrowBack } from 'react-icons/bi';
import ThemeButton from './ThemeButton';
import RootNav from './RootNav';

const ChatNavBar = () => {
  return (
    <RootNav>
      <div>
        <div>
          <Link to=".." css={navLink} aria-label="뒤로가기">
            <BiArrowBack />
          </Link>
        </div>
      </div>
      <div>
        <ul css={navMenu}>
          <li css={navItem}>
            <ThemeButton />
          </li>
        </ul>
      </div>
    </RootNav>
  );
};

export default ChatNavBar;
