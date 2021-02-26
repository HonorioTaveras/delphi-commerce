import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

import UrlContext from '../contexts/url/url.context';
import ProductIdContext from '../contexts/productId/productId.context';

const FetchContext = createContext();

const FetchProvider = ({ children }) => {
  const [productInformation, setProductInformation] = useState([]);
  const [productStyles, setProductStyles] = useState([]);

  const url = useContext(UrlContext);
  const productId = useContext(ProductIdContext);
  const productInformationEndpoint = `products/${productId}`;

  useEffect(() => {
    fetchProductInformation();
    fetchProductStyles();
  }, []);

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
        `${url}/${productInformationEndpoint}/styles`
      );
      setProductStyles(res.data.results);
    } catch (error) {
      console.log('fetch product styles error: ', JSON.parse(error));
    }
  };

  return (
    <FetchContext.Provider value={{ productInformation, productStyles }}>
      {children}
    </FetchContext.Provider>
  );
};

export { FetchProvider, FetchContext };
