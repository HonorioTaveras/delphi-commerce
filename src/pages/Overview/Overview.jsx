import React, { useContext } from 'react';

import { FetchProductsContext } from '../../providers/fetchProviders/FetchProductsProvider';

import './Overview.scss';

const Overview = () => {
  const { productInformation } = useContext(FetchProductsContext);
  console.log('productInformation: ', productInformation);

  return <div>Sup dirtbag from Overview Page!</div>;
};

export default Overview;
