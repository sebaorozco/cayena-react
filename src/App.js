//*********************/ Proyecto Cayena Almacén Dietético - E-commerce /******************************** *//

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={"Bienvenidos a Cayena, su almacén Orgánico y Natural"} />} />
        <Route exact path='/categoria/:categoryId' element={<ItemListContainer  />} />
        <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/checkout' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
