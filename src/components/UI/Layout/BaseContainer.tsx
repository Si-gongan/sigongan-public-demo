/** @jsxImportSource @emotion/react */
import { container } from './BaseContainer.styles';

interface ContainerProps {
  children: React.ReactNode;
}

const BaseContainer: React.FC<ContainerProps> = (props) => {
  return <div css={container}>{props.children}</div>;
};

export default BaseContainer;
