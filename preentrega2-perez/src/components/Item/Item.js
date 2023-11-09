/**
 * @Author: Your name
 * @Date:   2023-10-04 09:22:48
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-11-08 21:35:16
 */
import "./Item.css";
import {Link} from "react-router-dom";



function Item ({id, title, image, price, stock }){

    console.log(stock)

    return (
        <article className="CardItem">
            <header className="CardItemHeader">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <picture className="Imagen">
                <img src={image} alt={title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock } 
                </p>
            </section>
            <footer className="CardItemFooter">
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>
    )

}

export default Item;