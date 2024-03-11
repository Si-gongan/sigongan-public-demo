import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../../../api/axios/coupang/api';
import { History, HistoryInput } from '../../../types/product';
import ProductDetailContent from '../Content';

interface Props {
  productId?: string;
}

export default function SearchProductDetail({ productId }: Props) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['product', { id: productId }],
    queryFn: () => getProduct({ id: productId ?? '' }),
    enabled: productId !== undefined,
    staleTime: 300000,
  });

  const histories: History[] = (data?.product.histories || []).map(
    (history: HistoryInput) => ({
      price: history.price,
      regularPrice: history.regular_price,
      membershipPrice: history.membership_price,
      createdAt: history.created_at,
    })
  );

  return (
    <ProductDetailContent
      productType="search"
      data={data}
      isLoading={isLoading}
      error={error}
      tabProps={{
        id: `${productId}`,
        group: data?.product.group ?? '',
        histories: histories,
      }}
    />
  );
}
