//*********************/ Proyecto Cayena Almacén Dietético - E-commerce /******************************** *//

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {CartProvider} from './contexts/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import CheckoutOrder from './components/Checkout/CheckoutOrder';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
            <Route exact path='/' element={<ItemListContainer greeting={"Bienvenidos a Cayena, su almacén Orgánico y Natural"} />} />
            <Route exact path='/categoria/:categoryId' element={<ItemListContainer  />} />
            <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/checkout' element={<Checkout />} />
            <Route exact path='/checkoutorder/:orderId' element={<CheckoutOrder />} />
        </Routes>   
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
