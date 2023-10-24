/** @jsxImportSource @emotion/react */
import Card from '../UI/Card';
import { content, priceWrapper, thumbnail, title } from './Product.styles';
import { ProductModel } from '../../types/product';
// import { ReportParamsModel } from '../../api/ai/types';
// import { getReport } from '../../api/ai/api';
import { truncateText } from '../../utils';

interface PropsType {
  product: ProductModel;
}

const Product: React.FC<PropsType> = (props) => {
  const { product } = props;
  const price = `${product.price.toLocaleString()}원`;
  const truncatedText = `${truncateText(product.title, 60)}`;

  // test
  // const createReport = async () => {
  //   const reportParams: ReportParamsModel = {
  //     id: product.id.toString(),
  //   };
  //   const report = await getReport(reportParams);
  //   console.log(report);
  // };

  return (
    <Card width="100%" height="320px">
      <img css={thumbnail} src={product.image} alt={truncatedText} />
      <div css={content}>
        <h2 css={title}>{truncatedText}</h2>
        <span css={priceWrapper}>{price}</span>
        {/* <button onClick={createReport}>리포트 생성</button> */}
      </div>
    </Card>
  );
};

export default Product;
