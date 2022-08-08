import axios from 'axios';
import { createContext } from 'react';
import { useState, useEffect } from 'react';

export const ListingContext = createContext(null);

function ListingContextComponent({ children }) {
  const [products, setProducts] = useState(null);

  async function getProducts() {
    const { data: listings } = await axios('data.json');
    console.log(listings);

    setProducts(listings);
  }

  //   getProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const listingsObj = {
    products,
    setProducts: getProducts,
  };

  return (
    <ListingContext.Provider value={listingsObj}>
      {children}
    </ListingContext.Provider>
  );
}

export default ListingContextComponent;
