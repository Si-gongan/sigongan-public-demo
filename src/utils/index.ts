import { Category, History } from '../types/product';

export const truncateText = (text: string, length: number): string => {
  if (text.length <= length) {
    return text;
  }
  return `${text.slice(0, length)} ...`;
};

export const calculatePriceDiff = (data: History[]) => {
  let prevPrice = 0;
  return data.map((item, index) => {
    const diff = index !== 0 ? item.price - prevPrice : 0;
    prevPrice = item.price;
    return { ...item, diff };
  });
};

export const setThemeColor = () => {
  const initalThemeColor =
    localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark'
      ? '#121212'
      : '#ffffff';
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', initalThemeColor);
};

export const categories: Category[] = [
  {
    id: '1001',
    icon: '🧤',
    title: '여성패션',
    description: '지금 가장 인기 있는 여성 패션 아이템',
  },
  {
    id: '1002',
    icon: '😎',
    title: '남성패션',
    description: '지금 가장 인기 있는 남성 패션 아이템',
  },
  {
    id: '1010',
    icon: '💄',
    title: '뷰티',
    description: '베스트 뷰티 아이템',
  },
  {
    id: '1011',
    icon: '🍼',
    title: '출산/육아',
    description: '베스트 출산/육아 아이템',
  },
  {
    id: '1012',
    icon: '🍕',
    title: '식품',
    description: '지금은 냉장고를 채울 시간',
  },
  {
    id: '1013',
    icon: '🧽',
    title: '주방용품',
    description: '주방을 말끔하게',
  },
  {
    id: '1014',
    icon: '🧺',
    title: '생활용품',
    description: '생활에 필요한 베스트 아이템',
  },
  {
    id: '1015',
    icon: '🛋️',
    title: '홈인테리어',
    description: '홈 인테리어 베스트 아이템',
  },
  {
    id: '1016',
    icon: '💻',
    title: '가전디지털',
    description: '지금 가장 인기있는 디지털 상품',
  },
  {
    id: '1017',
    icon: '⛰️',
    title: '스포츠/레저',
    description: '건강한 취미를 위한 아이템',
  },
  {
    id: '1018',
    icon: '🚙',
    title: '자동차용품',
    description: '베스트 자동차 용품',
  },
  {
    id: '1019',
    icon: '📖',
    title: '도서/음반',
    description: '지금 가장 인기있는 도서/음반',
  },
  {
    id: '1020',
    icon: '🧶',
    title: '완구/취미',
    description: '이런 취미는 어때요?',
  },
  {
    id: '1021',
    icon: '🖋️',
    title: '문구/오피스',
    description: '깔끔한 문서 정리를 위한 베스트 아이템',
  },
  {
    id: '1024',
    icon: '💪',
    title: '건강식품',
    description: '건강한 하루를 위한 아이템',
  },
  {
    id: '1029',
    icon: '🐶',
    title: '반려동물',
    description: '우리 반려동물을 위한 아이템',
  },
  {
    id: '1030',
    icon: '👕',
    title: '유아동패션',
    description: '아이를 위한 패션 아이템',
  },
];
