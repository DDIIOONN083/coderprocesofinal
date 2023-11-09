/**
 * @Author: Your name
 * @Date:   2023-10-28 14:16:31
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-11-08 21:17:59
 */
/* import CartContext from '../Context/CartContext'; */
import React from 'react';
import { useContext } from 'react';
/* import './CartItem.css'; */
import { CartContext } from '../../context/CartContext';


const CartItem = ({ products }) => {
    const { removeProducts} = useContext(CartContext)

    return (
        <div className='container'>
            <picture>

                <img src={products.img} alt={products.name} className="imgContainer"/>

            </picture>
            <div className='productsCategorie'>
                <h2>
                    {products.name}
                </h2>
                <p>Cantidad: {products.quantity}</p>
                <p>Subtotal: {products.quantity * products.price}</p>
                <button onClick={() => removeProducts(products.id)}>Eliminar</button>
                
            </div>
        </div>

    )
};

export default CartItem;

