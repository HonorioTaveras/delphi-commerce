import React, { useContext, Children } from 'react';

import { OverviewContext } from '../../../providers/overview/OverviewProvider';

import './StyleSelector.scss';

const StyleSelector = () => {
  const {
    currentStyleIdx,
    setCurrentStyleIdx,
    productStyles,
    currentStyle,
  } = useContext(OverviewContext);
  console.log(currentStyle);

  return (
    <div className="style-selector-container">
      <div className="selected-style">
        STYLE &gt;
        {' '}
        {currentStyle ? currentStyle.name : null}
      </div>
    </div>
  );
};

export default StyleSelector;
