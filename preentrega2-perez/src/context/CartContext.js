/**
 * @Author: Your name
 * @Date:   2023-10-26 21:53:12
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-11-06 17:21:48
 */
import { createContext, useState } from "react";

export const CartContext = createContext({// creamos el context
    cart: []
})

export const CartProvider = ({ children}) => {//CREAMOS LA F CON TODA LA LOGICA DEL CART 1:22
    const [ cart, setCart] = useState([])
    console.log(cart)
    /* FUNCIONES hijas*/
   /* 1*/
      const addItem = (item, quantity) => {
        if(! isInCart(item.id)){
            setCart (prev => [...prev, {...item, quantity}])
        } else {
            console.error ('El producto ya fue agregado')
        }
    }
    /* 2*/const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
            }

        /* 3*/const clearCart = () => {
                setCart([])
                    }
            
            /* 4*/const isInCart = (itemId) => {// ESTA F INDICA SI EL PROD SE AGREGO O NO  A CART
                return cart.some(prod => prod.id === itemId)
            }
            return (
                <CartContext.Provider value = {{cart, addItem , removeItem, clearCart}}>
                {children} {/* ESTAS FUNCIONES SON COMPARTIDAS A LOS CHILDRENS A TRAVES DE VALUE */}
                </CartContext.Provider>
                )
            }/* LUEGO DE TENER NUESTRO CUSTOMPROVIDER SE LO PROVEEMOS A APP */

        
export default CartContext;