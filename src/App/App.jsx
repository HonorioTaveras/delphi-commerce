import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.scss';

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [productId, setProductId] = useState('8');
  const [productInformation, setProductInformation] = useState([]);

  const url = ' http://52.26.193.201:3000';
  const productInformationEndpoint = `products/${productId}`;

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoaded(true);
      setError(error);

      try {
        const res = await axios.get(`${url}/${productInformationEndpoint}`);

        console.log('product information from app component: ', res.data);
        setProductInformation(res.data);
      } catch (error) {
        setError(error);
      }

      setIsLoaded(true);
    };

    fetchProducts();
  }, []);

  return <div>Sup dirtbag!</div>;
};

export default App;
