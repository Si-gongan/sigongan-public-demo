import { useQuery } from '@tanstack/react-query';
import { getMainDetail } from '../../../api/axios/ai/api';
import ProductDetailContent from '../Content';

export default function MainProductDetail({
  productId,
}: {
  productId: string;
}) {
  const url = `https://www.coupang.com/vp/products/${productId}`;

  const { data, isLoading, error } = useQuery({
    queryKey: ['main-product', { url }],
    queryFn: () => getMainDetail({ url: url ?? '' }),
    enabled: url !== undefined && url !== '',
    staleTime: 300000,
  });

  return (
    <ProductDetailContent
      productType="main"
      data={data}
      isLoading={isLoading}
      error={error}
      tabProps={{ id: productId, url: url }}
    />
  );
}
