import { useState } from 'react';
import { CategoryId } from '../types/product';
import { categories } from '../utils';

const useCategory = () => {
  const [categoryId, setCategoryId] = useState<CategoryId>('1001');
  const selectedCategory =
    categories.find((category) => category.id === categoryId) ?? categories[0];

  const selectCategory = (id: CategoryId) => {
    setCategoryId(id);
  };

  return { selectedCategory, selectCategory };
};

export default useCategory;
