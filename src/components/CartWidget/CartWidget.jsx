import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from '../CartContext/CartContext'
const CartWidget = () => {

    const { carrito } = useContext(CarritoContext);
    const imgCart = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
    const totalCant = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    return(

        <div className='sectCart'>
        <Link to='/cart'>
        <img className='imgCart' src ={imgCart} alt="imgCart" />
        <strong>{totalCant}</strong>
        </Link>
        </div>

    )
    }

export default CartWidget