import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsPage from '../pages/Products';
import DetailPage from '../pages/Detail';
import RootLayout from '../pages/Root';
import TestPage from '../pages/Test';
import ErrorPage from '../pages/Error';
import MainPage from '../pages/Main';
import ChatPage from '../pages/Chat';

// TODO: path 정의
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        index: true,
        element: <MainPage />,
      },
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
  {
    path: '/chat',
    element: <ChatPage />,
    errorElement: <ErrorPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
