import "./Item.css"
import { Link } from "react-router-dom";
import { useState, useContext } from 'react'
import { CarritoContext } from '../CartContext/CartContext'
import ItemCount from "../ItemCount/ItemCount";


const Item = ({ nombre, id, precio, img, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);


    const { agregarProducto } = useContext(CarritoContext);



    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);


        const item = { id, nombre, precio, stock};
        agregarProducto(item, cantidad);
    }

    return (
        <div className='prod'>
            <div className="card">
                <img className="card-img" src={img} alt={"Problemas de conexion"+"//"+nombre} />
                <h2 className="card-name">{nombre}</h2>
                <p className="card-precio">Precio: ${precio}</p>
                <p className="card-id">Id producto: {id}</p>
                <p className="card-stock">Stock: {stock}</p>
                    <Link to={`/item/${id}`} className="btn">Ver Detalle</Link>
                <div className="card-btn">
                    {
                       agregarCantidad > 0
                       ? <Link to="/cart"><button className="btnProducto">En carrito 🛒</button></Link>
                       : stock > 0 
                           ?<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
                           :<Link to="/"><button className="btnProducto">SIN STOCK</button></Link> }
                </div>
            </div>
        </div>
    )
}

export default Item;