/**
 * @Author: Your name
 * @Date:   2023-10-29 14:19:07
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-11-07 20:54:33
 */
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/firebase/firabaseConfig";

/* VER ESPECIFICAMENTE ESTE ARCHIVO -VIDEO 4 MIN 1 A 2:10 */

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect (() => {
/*     setLoading(() =>{ */
        setLoading(true)

    const collectionRef = categoryId
    ? query(collection(db,'products'), where('category', '==',categoryId))
     
    : collection (db,'products')// 2 ref distintas

     getDocs(collectionRef)
     .then(response => {
        const productsAdapted = response.docs.map(doc => {// rta adpatada para poder usarla en nuestra app
            const data = doc.data()
            return { id: doc.id, ...data}
        })
            setProducts(productsAdapted)
        })
         .catch(error => {
        console.log(error)
        }) 
    .finally(() => {
        setLoading(false)
    })
/* hasta aca se entiende luego quedan ciertas cuestiones al azar */
/* })} */}, [categoryId])
/* 
    console.log("La categoria que llego aca es:", categoryId)
 */

    //Con el useEffect hago el llamado a la API o en este caso el asyncMock:
    /* useEffect(()=>{

        const asyncFunc = categoryId ? getProductsByCategory : getProductos

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error)
            })
    },[categoryId]) */ //El segundo parametro con un array vacio significa que solo se va a ejecutar cuando se renderize por primera vez
    //Fin del useEffect


    return(
        <div className="navegacion">
            {/* <h1>{greeting}</h1> */}
            <ItemList products={products}/>
        </div>
    )

}

export default ItemListContainer;