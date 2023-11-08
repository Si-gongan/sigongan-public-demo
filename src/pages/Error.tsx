import RouterError from '../components/RouterError/RouterError';
import ResponsiveContainer from '../components/UI/Layout/ResponsiveContainer';

const ErrorPage: React.FC = () => {
  return (
    <ResponsiveContainer>
      <RouterError />
    </ResponsiveContainer>
  );
};

export default ErrorPage;
