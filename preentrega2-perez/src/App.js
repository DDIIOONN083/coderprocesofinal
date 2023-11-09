/**
 * @Author: Your name
 * @Date:   2023-10-26 18:31:38
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-11-08 20:11:05
 */


import "bulma/css/bulma.css"; //Cuando importo una hoja de estilos, no hace falta guardarla en una variable.

import { CartProvider } from "./context/CartContext.js";
import Cart from './components/Cart/Cart.js'
 import Checkout from "./components/Checkout/Checkout.js"; 

import { useEffect,useState } from "react"; 
import { db } from "./service/firebase/firabaseConfig.js";
import { collection,getDocs, addDoc} from "firebase/firestore";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
 

function App() {

/*   const [itemList, setItemList] = useState([]);
 const [newItemNombre, setNewItemNombre] = useState("");
 const [newItemPrecio, setNewItemPrecio] = useState(0);
 const [newItemStock, setNewItemStock] = useState(0);
 
 const itemsCollectionRef = collection(db, "Items");
   console.log(itemsCollectionRef)
 

 
 
   const getItemList = async()=>{//getItemList pide los datos + actualiza la VdE actualiza la basededatos
     const data = await getDocs(itemsCollectionRef);
   const filteredData = data.docs.map( (doc) => ({
     ...doc.data(), 
     id:doc.id
   }));
 setItemList(filteredData);
 }
 
 useEffect(()=>{
 getItemList();
 },[])

 
 const onSubmitItem = async()=>{
   await addDoc(itemsCollectionRef, {nombre: newItemNombre,precio:newItemPrecio,stock:newItemStock});
   getItemList();
 }
 

 return (
   <div>
       <div>
         <h2>Nuevo Producto</h2>
         <input placeholder= "Nombre" onChange={(e)=>setNewItemNombre(e.target.value)}/>
         <input placeholder= "Precio"  onChange={(e)=>setNewItemPrecio(Number(e.target.value))} />
         <input placeholder= "Stock"  onChange={(e)=>setNewItemStock( Number(e.target.value))} />
         <button onClick={ onSubmitItem}>Enviar </button>      
       </div>  

     {itemList.map((item)=>(
       <div key ={item.id}>
         <h2>{item.nombre} </h2>
         <p>{item.precio}</p>
         <p>{item.stock}</p>    
       </div>
       ))}
       </div>
       
);
}
  export default App; */

  
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider> 
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
          <Route path= '/cart' element={ <Cart/> }/>
          <Route path='/checkout' element={ <Checkout/> }/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        
        </Routes>     
      </CartProvider>  
      </BrowserRouter>
    </div>
    
  );  
}

export default App 