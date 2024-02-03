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
          <Link to=".." css={navLink} aria-label="뒤로가기" role="button">
            <BiArrowBack />
          </Link>
        </div>
      </div>
      <div>
        <div css={navMenu}>
          <div css={navItem}>
            <ThemeButton />
          </div>
        </div>
      </div>
    </RootNav>
  );
};

export default ChatNavBar;
