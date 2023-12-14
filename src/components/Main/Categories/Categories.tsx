/** @jsxImportSource @emotion/react */
import { Category, CategoryId } from '../../../types/product';
import { categories } from '../../../utils';
import CategoryBtn from './Category';
import Container from './Container';

interface CategoriesProps {
  selectedCategory: Category;
  selectCategory: (id: CategoryId) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  selectedCategory,
  selectCategory,
}) => {
  return (
    <Container>
      {categories.map((category) => {
        const isSelected = category.id === selectedCategory.id;
        return (
          <CategoryBtn
            key={category.id}
            category={category}
            isSelected={isSelected}
            onClick={() => selectCategory(category.id)}
          />
        );
      })}
    </Container>
  );
};

export default Categories;
