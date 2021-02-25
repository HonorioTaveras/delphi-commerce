import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

import UrlContext from '../contexts/url/url.context';
import ProductIdContext from '../contexts/productId/productId.context';

const FetchContext = createContext();

const FetchProvider = ({ children }) => {
  const [productInformation, setProductInformation] = useState([]);

  const url = useContext(UrlContext);
  const productId = useContext(ProductIdContext);
  const productInformationEndpoint = `products/${productId}`;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${url}/${productInformationEndpoint}`);
      setProductInformation(res.data);
    } catch (error) {
      console.log('fetch products error: ', JSON.parse(error));
    }
  };

  console.log(productInformation);

  return (
    <FetchContext.Provider value={{ productInformation }}>
      {children}
    </FetchContext.Provider>
  );
};

export { FetchProvider, FetchContext };
