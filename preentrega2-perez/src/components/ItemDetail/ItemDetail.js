/**
 * @Author: Your name
 * @Date:   2023-10-26 18:31:38
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-11-06 17:26:09
 */
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
 import { CartContext } from '../../context/CartContext'; 


function ItemDetail ({id, name, image, category, description, price, stock}) {
const [quantityAdded, setQuantityAdded] = useState(0)//1-Estado...aca se agregan los prod....
const {addItem} = useContext (CartContext)
/* const {addItem} = useContext(CartContext)
 *//*3- SETEAMOS LA CANT RECIB DEL COUNTER EN ESTE ESTADO handleOnAdded  */
const handleOnAdded = (quantity) => {//Una vez que este estado se valide mostrar el link a la ruta cart 
    setQuantityAdded(quantity)
    // ARMAMOS EL OBJETO CON SUS DATOS-Postconfig CartProv-Video 2
     
     const item = {
        id, name, price
    } 
    // LA PASAMOS LOS DATOS A addItem y la cant que selecciono el Usuario-V2
      addItem (item,quantity)  
}
 
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={image} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descricion: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
           {
            /*4- UNA VEZ QUE EL ESTADO CAMBIE, SE VALIDE QUE ES >0, Y SI ES ASI  MOSTRAR LINK A RUTA CART */
            quantityAdded > 0 ? (
           <Link to= '/cart' className='Option'>Terminar Compra </Link>
           ) : (
                <ItemCount initial={1} stock={stock} onAdd={ handleOnAdded }/>//2-F que se ejecuta al clickear el botn del counter(mediante onAdd)
                )
            }
            </footer>
        </article>

    )
}

export default ItemDetail;