import React, { useContext } from 'react';

import { OverviewContext } from '../../../providers/overview/OverviewProvider';

import './ProductInformation.scss';

const ProductInformation = () => {
  const { productInformation: { category, name }, productStyles, currentStyleIdx } = useContext(
    OverviewContext,
  );

  const currentStyle = productStyles[currentStyleIdx];

  return (
    <div className="product-information-container">
      <div className="product-category">{category}</div>
      <div className="product-name">{name}</div>
      {currentStyle && currentStyle.sale_price === '0' ? (
        <div className="display-price">
          {`$${currentStyle && currentStyle.original_price}`}
        </div>
      ) : (
        <div>
          <span className="sale-price-block display-price">
            {`$${currentStyle && currentStyle.sale_price}`}
          </span>
          {' '}
          <span className="sale-price-block struck-price">
            {`$${currentStyle && currentStyle.original_price}`}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductInformation;
