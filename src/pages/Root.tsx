import { Outlet } from 'react-router-dom';
import MainNavBar from '../components/NavigationBar/MainNavBar';
import Help from '../components/Help/Help';

const RootLayout: React.FC = () => {
  return (
    <>
      <section>
        <Help />
      </section>
      <MainNavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
