import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {SetBadgeColor} from '../services';

interface CardProps {
  product: Product;
  roundDecimalsValues: (priceTagNumber:number) =>void;
}

const ProductCard: React.FC<CardProps> = ({ product, roundDecimalsValues }) => {
  const history = useHistory();
  return (
    <div className='card h-100 product-card-hover d-flex flex-column justify-content-between'>
      <span
        className=''
        onClick={() => history.push(`/products/${product.id}`)}>
        {/* Image on Top */}
        <div className='sh-card-img'>
          <div
            className='sh-bg-img'
            style={{ backgroundImage: `url(${product.image})` }}></div>
        </div>

        {/* Card Body */}
        <div className='card-body'>
          <h5 className='card-title'>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </h5>
          <div className='d-flex justify-content-between align-items-center'>
            <strong>${roundDecimalsValues(+product.price)}</strong>
            <span className={`badge ${SetBadgeColor(product.category)}`}>
              {product.category}
            </span>
          </div>
        </div>
      </span>

      {/* Add to Cart Button  */}
      <div className='card-footer'>
        <button className='btn btn-block btn-primary'>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
