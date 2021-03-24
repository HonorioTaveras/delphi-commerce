import React, { useContext, Children } from 'react';

import { OverviewContext } from '../../../providers/overview/OverviewProvider';

import './StyleSelector.scss';

const StyleSelector = () => {
  const {
    setCurrentStyleIdx,
    productStyles,
    currentStyle,
  } = useContext(OverviewContext);
  console.log(productStyles);

  return (
    <div className="style-selector-container">
      <div className="selected-style">
        STYLE &gt;
        {' '}
        {currentStyle ? currentStyle.name : null}
      </div>
      <div className="style-selector">
        {Children.toArray(productStyles.map(({ photos }, idx) => (
          <div className="style-image">
            <img src={photos[0].url} alt="" onClick={() => setCurrentStyleIdx(idx)} />
          </div>
        )))}
      </div>
    </div>
  );
};

export default StyleSelector;
