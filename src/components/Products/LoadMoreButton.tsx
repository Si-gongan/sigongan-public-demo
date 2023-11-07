interface Props {
  toNextPage: () => void;
  isLoading: boolean;
}

const LoadMoreButton: React.FC<Props> = (props) => {
  const { toNextPage, isLoading } = props;
  return (
    <div>
      <button onClick={toNextPage} disabled={isLoading}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
