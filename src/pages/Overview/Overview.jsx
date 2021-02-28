import React from 'react';

import Header from '../../Components/Overview/Header/Header';
import ImageGallery from '../../Components/Overview/ImageGallery/ImageGallery';
import StarRating from '../../Components/Overview/StarRating/StarRating';
import ProductInformation from '../../Components/Overview/ProductInformation/ProductInformation';
import StyleSelector from '../../Components/Overview/StyleSelector/StyleSelector';
import ShoppingCart from '../../Components/Overview/ShoppingCart/ShoppingCart';
import ProductOverview from '../../Components/Overview/ProductOverview/ProductOverview';

import './Overview.scss';

const Overview = () => (
  <div className="overview-container">
    <div className="header">
      <Header />
    </div>
    <div className="image-gallery">
      <ImageGallery />
    </div>
    <div className="product-information-container">
      <div className="star-rating">
        <StarRating />
      </div>
      <div className="product-information">
        <ProductInformation />
      </div>
      <div className="style-selector">
        <StyleSelector />
      </div>
      <div className="shopping-cart">
        <ShoppingCart />
      </div>
    </div>
    <div className="product-overview">
      <ProductOverview />
    </div>
  </div>
);

export default Overview;
