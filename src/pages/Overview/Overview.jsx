import React, { useContext } from 'react';

import { FetchProcuctsContext } from '../../providers/fetchProviders/FetchProductsProvider';

import './Overview.scss';

const Overview = () => {
  const { productInformation } = useContext(FetchProcuctsContext);
  console.log('productInformation: ', productInformation);

  return <div>Sup dirtbag from Overview Page!</div>;
};

export default Overview;
