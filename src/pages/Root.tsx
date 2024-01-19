import { Outlet } from 'react-router-dom';
import MainNavBar from '../components/NavigationBar/MainNavBar';
import Help from '../components/Help/Help';

const RootLayout: React.FC = () => {
  return (
    <>
      <MainNavBar />
      <main>
        <Outlet />
      </main>
      <footer>
        <Help />
      </footer>
    </>
  );
};

export default RootLayout;
