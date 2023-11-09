/**
 * @Author: Your name
 * @Date:   2023-10-28 12:47:28
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-11-08 20:59:45
 */
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
 import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'


/* Video 3- ver min 1:40 hay diferencias con el planteo del profe */
const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext (CartContext)
   
    if (totalQuantity === 0) {
        return (
            <div className="cart_final">
            
                <h1>No hay Items en el carrito</h1>
                <Link to="/" className="option" >Inicio</Link>
            {/* < Link to= '/' className='Option'>Productos</Link> */}
            </div>
        )
    }

return (
    <div className="cart_final">
   {/*  { cart.map ( p => <CartItem key= {p.id} {...p}/>)} */}
   {cart.map(item => 
   <CartItem key={item.id} {...item}/>)}
   
     <h3 className="cart-text">Total carrito: ${total}</h3>
     <button onClick={()=> clearCart()} className="btn_limpiar">Limpiar carrito</button>
        <Link to="/checkout" className="btn_check">Confirma tu compra</Link>
{/*      <button onCLick={() => clearCart ()} className="Button">Limpiar Carrito</button>    
     <Link to='/checkout' className='Option'>Checkout</Link>  */}
</div>
)
}

export default Cart;