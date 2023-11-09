/**
 * @Author: Your name
 * @Date:   2023-10-03 19:36:23
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-11-05 23:49:09
 */

import cart from "./assets/cart.svg";
/* import "./CartWidget.css"; */
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
/* import { CartProvider } from "../../context/CartContext";
 */
const CartWidget = () => {
    const { totalQuantity } = useContext (CartContext )


    return (
        <Link to= '/cart' className= 'CartWidget' style= {{display: totalQuantity > 0 ? 'block': 'none'}}> 
               
            <img className = "CartImg" 
            src={cart} alt='cart-widget'/>{/*img className = "cart-big"" */}
            {totalQuantity}
            </Link>
    )
}

export default CartWidget