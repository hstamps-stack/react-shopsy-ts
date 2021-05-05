import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import SingleProductCard from '../components/SingleProductCard';

const ProductPage = () => {
  const { product, getSingleProduct,roundDecimalsValues } = useContext(GlobalContext);
  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    getSingleProduct(+productId);
  }, [productId]);

  if (!product) {
    return (
      <div className='row'>
        <div className='col'>
          <h2 className='text-center'>No Product!</h2>
        </div>
      </div>
    );
  }
  return (
    <div>
      <SingleProductCard  roundDecimalsValues= {roundDecimalsValues} product ={product}/>
    </div>
  );
};

export default ProductPage;
