/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Category, CategoryId } from '../../../types/product';
import { categories } from '../../../utils';
import CategoryBtn from './Category';
import Container from './Container';
import CategoryTitle from './Title';

interface CategoriesProps {
  selectedCategory: Category;
  selectCategory: (id: CategoryId) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  selectedCategory,
  selectCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <CategoryTitle isOpen={isOpen} toggle={toggle} />
      <Container isOpen={isOpen}>
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
    </>
  );
};

export default Categories;
