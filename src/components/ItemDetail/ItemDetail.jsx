import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CarritoContext } from '../CartContext/CartContext'
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, precio, img, stock, desc }) => {



    const [agregarCantidad, setAgregarCantidad] = useState(0);


    const { agregarProducto } = useContext(CarritoContext);



    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);


        const item = { id, nombre, precio, stock, desc };
        agregarProducto(item, cantidad);
    }
    return (
        <div className='contenedorItem'>
            <div className='descripcion'>
                <h2>Nombre: {nombre} </h2>
                <h3>Precio: {precio} </h3>
                <h3> ID: {id} </h3>
                <p className='desc'>Descripcion: {desc}</p>
                <h3>Stock: {stock}</h3>
                <p className='parrafo'><br /> Realiza tu pedido en 1 Minuto! <br /> Nosotros nos encargamos del resto. <br /> </p>
                <div>

                    {
                        agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                    }
                </div>
            </div>
            <div >
                <img className='imgCant' src={img} alt={nombre} />
            </div>
        </div>
    )
}

export default ItemDetail