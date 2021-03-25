import React, { useContext, Children } from 'react';

import { OverviewContext } from '../../../providers/overview/OverviewProvider';

import './StyleSelector.scss';

const StyleSelector = () => {
  const {
    setCurrentStyleIdx,
    productStyles,
    currentStyle,
    setIndex,
    currentStyleIdx,
  } = useContext(OverviewContext);
  console.log(productStyles);

  const handleStyleSelect = (i) => {
    setCurrentStyleIdx(i);
    setIndex(0);
  };

  return (
    <div className="style-selector-container">
      <div className="selected-style">
        <span className="style">STYLE &gt;</span>
        {' '}
        <span className="current-style-name">
          {currentStyle ? currentStyle.name : null}
        </span>
      </div>
      <div className="style-selector">
        {Children.toArray(
          productStyles.map(({ photos }, idx) => (
            <div className="style-image">
              <img
                src={photos[0].url}
                alt=""
                onClick={() => handleStyleSelect(idx)}
              />
              {idx === currentStyleIdx ? <div className="checkmark" /> : null}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default StyleSelector;
