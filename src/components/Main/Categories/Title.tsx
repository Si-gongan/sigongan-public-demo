/** @jsxImportSource @emotion/react */
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6';
import { titleContainer, title, titleBtn } from './Categories.styles';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

function CategoryTitle({ isOpen, toggle }: Props) {
  const btnLabel = isOpen ? '닫기' : '열기';
  const icon = isOpen ? <FaAngleUp size={16} /> : <FaAngleDown size={16} />;

  return (
    <div css={titleContainer}>
      <h2 css={title}>카테고리 별 인기 상품</h2>
      <button css={titleBtn} onClick={toggle} aria-label={btnLabel}>
        {icon}
      </button>
    </div>
  );
}

export default CategoryTitle;
