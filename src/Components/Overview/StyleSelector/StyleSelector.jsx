import React, { useContext } from 'react';

import { OverviewContext } from '../../../providers/overview/OverviewProvider';

import './StyleSelector.scss';

const StyleSelector = () => {
  const { currentStyleIdx, setCurrentStyleIdx, productStyles } = useContext(OverviewContext);
  console.log(productStyles);

  return (
    <div>style selector</div>
  );
};

export default StyleSelector;
