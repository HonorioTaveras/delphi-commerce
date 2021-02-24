import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

import UrlContext from '../../contexts/url/url.context';
import ProductIdContext from '../../contexts/productId/productId.context';

const FetchProcuctsContext = createContext();

const FetchProductsProvider = ({ children }) => {
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

  return (
    <FetchProcuctsContext.Provider value={{ productInformation }}>
      {children}
    </FetchProcuctsContext.Provider>
  );
};

export { FetchProductsProvider, FetchProcuctsContext };
