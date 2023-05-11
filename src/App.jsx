import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from './components/ItemlistContainer/ItemsListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./components/CartContext/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout"


function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}   />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<h2>Sitio en Construcción</h2>} />
          </Routes>
          <Footer/>
        </CarritoProvider>
      </BrowserRouter>

    </>
  );
}

export default App;