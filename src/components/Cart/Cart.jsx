import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../CartContext/CartContext'
import CartItem from '../CartItem/CartItem'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import './Cart.css'

const Cart = (img) => {

    const {carrito, vaciarCarrito} = useContext(CarritoContext);

    const totalCant = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    const total = carrito.reduce((total , producto) => total + (producto.item.precio * producto.cantidad), 0);

    const redirect = () => {
        setTimeout(() =>{
            window.location = origin  
        }
            , 2000)
        }


    if(totalCant === 0){
        return (
            <>
                <h2>Ha vaciado el carrito. Rediccionando...</h2>
            {
                redirect()             
            }
            </>
        )
    }

    return (
    <div>
        <img src={img} alt="" />
        {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
        <h3 className="cartItem">Total: ${total}</h3>
        <div className='cart'>
        <Link to='/'><button onClick={() => vaciarCarrito()}>Vaciar Carrito</button></Link>
        <Link to='/'><button>Agregar productos</button></Link>
        <Link to='/checkout'><button>Finalizar Compra</button></Link>
        </div>
    </div>
    )
}

export default Cart