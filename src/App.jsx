import React, {ReactRouter} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Products from './Components/Products';
import SimpleCart from './Components/SimpleCart';

function App() {
  return (
    <div>
      <SimpleCart />
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
