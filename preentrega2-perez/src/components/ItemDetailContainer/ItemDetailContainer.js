/**
 * @Author: Your name
 * @Date:   2023-10-29 14:19:07
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-11-05 20:22:34
 */
import { useState, useEffect } from "react";
import {getProductById} from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/firebase/firabaseConfig";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const [loading,setLoading] = useState(true)
    const { itemId } = useParams()
    /* console.log("El item iD QUE llega es: ", itemId); */
    useEffect(()=>{
      setLoading(true)

      const docRef = doc(db, 'products', itemId)
      getDoc(docRef)
      .then(response => {
const data = response.data()//adaptamos la respuesta para poder utilizarle entre nuestros comp
const productsAdapted = {id : response.id, ...data }
setProduct(productsAdapted)//luego de adapt la respuesta la seteamos en el Estado
})
.catch(error => {
    console.error(error);
})
.finally(() =>{
    setLoading(false)
})
/* 
        getProductById(itemId)
        .then(response => {
            setProduct(response);
        })
        .catch(error => {
            console.error(error);
        })
    } */
    },[itemId])

    return(
        <div className="ItemDetailContainer">

            <ItemDetail {...product}/>
        </div>
    )

}

export default ItemDetailContainer;