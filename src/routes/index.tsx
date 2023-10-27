import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsPage from '../pages/Products';
import DetailPage from '../pages/Detail';

// TODO: path 정의
const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductsPage />,
  },
  {
    path: '/detail/:id',
    element: <DetailPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
