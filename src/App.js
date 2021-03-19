import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navBar';
import  ItemListContainer from './components/ItemListContainer';

function App() {

  return (
  <div className="App">

    <NavBar />   
   {/* <ItemListContainer /> */}

   <div class="boxItem">
    <button type="button" class="btn btn-outline-dark">-</button>
    <button type="button" class="btn btn-outline-dark">+</button>
    <button type="button" class="btn btn-outline-dark">Agregar al carrito</button>
  </div>



  </div>
  )
;
}

export default App;
