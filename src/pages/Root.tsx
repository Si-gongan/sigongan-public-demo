import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Help from '../components/Help/Help';

const RootLayout: React.FC = () => {
  return (
    <>
      <NavigationBar />
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
