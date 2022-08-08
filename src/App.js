import './App.css';
import { useEffect, useState } from 'react';
import Products from './components/Products';

import { useContext } from 'react';
import { ListingContext } from './contexts/ListingContext';

function App() {
  const values = useContext(ListingContext);
  console.log(values);

  return (
    <div className='App'>
      {values.products && values.products.map((p) => <li>{p.title}</li>)}
      <Products />
    </div>
  );
}

export default App;
