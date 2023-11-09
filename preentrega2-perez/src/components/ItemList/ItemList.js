/**
 * @Author: Your name
 * @Date:   2023-10-04 09:22:48
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-11-07 19:27:13
 */
import Item from "../Item/Item";
import "./ItemList.css"

function ItemList ({products}){

    console.log(products);
    return (
        <div className="ListGroup">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )

}
export default ItemList;