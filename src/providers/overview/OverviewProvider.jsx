import React, {
  useState, useEffect, createContext, useContext,
} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import UrlContext from '../../contexts/url/url.context';
import ProductIdContext from '../../contexts/productId/productId.context';

const OverviewContext = createContext();

const OverviewProvider = ({ children, defaultOpened = false }) => {
  const url = useContext(UrlContext);
  const productId = useContext(ProductIdContext);

  const [productInformation, setProductInformation] = useState([]);
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyleIdx, setCurrentStyleIdx] = useState(0);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const productInformationEndpoint = `products/${productId}`;
  const currentStyle = productStyles[currentStyleIdx];
  const handleSelect = (idx) => setIndex(idx);

  useEffect(() => {
    const fetchProductInformation = async () => {
      try {
        const res = await axios.get(`${url}/${productInformationEndpoint}`);
        setProductInformation(res.data);
      } catch (error) {
        console.log('fetch product information error: ', JSON.parse(error));
      }
    };

    const fetchProductStyles = async () => {
      try {
        const res = await axios.get(
          `${url}/${productInformationEndpoint}/styles`,
        );
        setProductStyles(res.data.results);
      } catch (error) {
        console.log('fetch product styles error: ', JSON.parse(error));
      }
    };

    fetchProductInformation();
    fetchProductStyles();
  }, [productInformationEndpoint, url]);

  return (
    <OverviewContext.Provider
      value={{
        productInformation,
        productStyles,
        currentStyleIdx,
        setCurrentStyleIdx,
        index,
        setIndex,
        currentStyle,
        handleSelect,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </OverviewContext.Provider>
  );
};

OverviewProvider.propTypes = {
  children: PropTypes.element.isRequired,
  defaultOpened: PropTypes.bool.isRequired,
};

export { OverviewProvider, OverviewContext };
