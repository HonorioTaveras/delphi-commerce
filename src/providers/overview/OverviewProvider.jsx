import React, {
  useState, useEffect, createContext, useContext,
} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import UrlContext from '../../contexts/url/url.context';
import ProductIdContext from '../../contexts/productId/productId.context';

const OverviewContext = createContext();

const OverviewProvider = ({ children }) => {
  const [productInformation, setProductInformation] = useState([]);
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyleIdx, setCurrentStyleIdx] = useState(0);

  const url = useContext(UrlContext);
  const productId = useContext(ProductIdContext);
  const productInformationEndpoint = `products/${productId}`;

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
      }}
    >
      {children}
    </OverviewContext.Provider>
  );
};

OverviewProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { OverviewProvider, OverviewContext };
