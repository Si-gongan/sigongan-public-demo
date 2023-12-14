/** @jsxImportSource @emotion/react */
import { Category } from '../../../types/product';
import { btn, categoryIcon, categoryText } from './Categories.styles';

interface CategoryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
  category: Category;
}

const CategoryBtn: React.FC<CategoryProps> = ({
  isSelected,
  category,
  ...props
}) => {
  return (
    <button css={btn(isSelected)} {...props}>
      <div css={categoryIcon}>{category.icon}</div>
      <div css={categoryText}>{category.title}</div>
    </button>
  );
};

export default CategoryBtn;
