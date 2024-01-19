/** @jsxImportSource @emotion/react */
import { useRecoilValue } from 'recoil';
import bannerState from '../../recoil/banner';
import AppBanner from '../AppDownloader/Banner';
import ResponsiveContainer from '../UI/Layout/ResponsiveContainer';
import { header, navbar } from './RootNav.styles';
import useScroll from '../../hooks/useScroll';

interface Props {
  children: React.ReactNode;
}

function RootNav({ children }: Props) {
  const isBannerOpen = useRecoilValue(bannerState);
  const { scrollDirection } = useScroll();
  const isUp = scrollDirection === 'up' ? true : false;

  return (
    <>
      {isBannerOpen && <AppBanner />}
      <header css={header(isBannerOpen, isUp, scrollY)}>
        <ResponsiveContainer>
          <nav css={navbar}>{children}</nav>
        </ResponsiveContainer>
      </header>
    </>
  );
}

export default RootNav;
