import { useState } from 'react';

import Header from './components/Layout/Header';
import './App.css';
import Items from './components/Items/Items';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [user, setUser] = useState(null);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} user={user}/>}
      <Header onShowCart={showCartHandler} setUser={setUser} user={user}/>
      <main>
        <Items user={user}/>
      </main>
    </CartProvider>
  );
}

export default App;