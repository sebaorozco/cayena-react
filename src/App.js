import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Cayena, su almacén Orgánico y Natural"}/>
    </>
  );
}

export default App;
