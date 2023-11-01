import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsPage from '../pages/Products';
import DetailPage from '../pages/Detail';
import RootLayout from '../pages/Root';
import TestPage from '../pages/Test';

// TODO: path 정의
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'detail/:id',
        element: <DetailPage />,
      },
      {
        path: 'test',
        element: <TestPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
