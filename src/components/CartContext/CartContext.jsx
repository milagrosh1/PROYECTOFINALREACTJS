import { useState, createContext } from "react";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const CarritoContext = createContext({ carrito: [] });
export const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]); 
    
    const agregarProducto = (item, cantidad) => {
      if (!yaEstaEnCarrito(item.id) && item.stock > 0) {
          setCarrito(prev => [...prev, { item, cantidad }]);
          Toastify({
              text: "Producto agregado",
              className: "info",
              style: {
                background: "linear-gradient(to right, #6C785C, #6C788C)",
              }
            }).showToast();
      } else if(!yaEstaEnCarrito(item.id) && item.stock <= 0) {
          Toastify({
              text: "Producto sin stock, contactenos por Email para encargos",
              className: "info",
              style: {
                background: "linear-gradient(to right, #6C788C, #6C785C)",
              }
            }).showToast();
      } else {
        Toastify({
          text: "Producto ya agregado. Visite el Carrito",
          className: "info",
          style: {
            background: "linear-gradient(to right, #6C788C, #6C785C)",
          }
        }).showToast();
}
        
    }

    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
       if( window.location.pathname != "/checkout" ){
        Toastify({
            text: "Ha vaciado el carrito. Por favor, seleccione los productos deseado",
            className: "info",
            style: {
              background: "linear-gradient(to right, #6C785C, #6C788C)",
            }
          }).showToast();}else{
            Toastify({
              text: "Operacion exitosa!",
              className: "info",
              style: {
                background: "linear-gradient(to right, #6C785C, #6C788C)",
              }
            }).showToast();
          }
    }

    const yaEstaEnCarrito = (id) => {
        return carrito.some(prod => prod.item.id === id);
    }

    return (
        <CarritoContext.Provider value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito }} >
            {children}
        </CarritoContext.Provider>
    )


}