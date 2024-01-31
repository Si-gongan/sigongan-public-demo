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
      <span css={categoryIcon(isSelected)} aria-hidden="true">
        {category.icon}
      </span>
      <span css={categoryText}>{category.title}</span>
    </button>
  );
};

export default CategoryBtn;
