/**
 * @Author: Your name
 * @Date:   2023-10-29 22:04:19
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-11-08 21:32:48
 
 
 PUEDE SER QUE FALTE ACLARAR LAS VARIABLES QUE FALTAN ACA */
 import { db } from '../../service/firebase/firabaseConfig' 
/*  import CheckoutForm from '../CheckoutForm/CheckoutForm'  */

  import { useState } from 'react' 
 import Checkout from '../Checkout/Checkout' 
 
const CheckoutForm = ({onConfirm}) => { /*SINCRONIZAMOS LOS INPUTS CON ESTADOS */
  const [name, setName] = useState('')// 1) ESTADOS
  const [phone, setPhone] = useState('')
  const [email,setEmail] = useState('')

  const handleConfirm =(event) => {
    event.preventDefault()/*2) LE DEVUELVE LOS DATOS A LA FUNCION createOrder que la que estamos pasando como props a este componente */

    const userData = {
        name, phone, email
    }

    onConfirm(userData)/* 3)estos datos que pasamos por este argumento (sigue en Checkout)*/
  }  

  return (
    <div className='Container'>
  {/* 1)SINCRONIZAMOS LOS INPUTS CON ESTADOS */}     
        {/*2) AL HACER EL SUBMIT DEL FORM, EJECUTAMOS UNA FUNCION QUE PREVIENE EL COMPORT POR DEFECTO DEL FORM */}
        <form onSubmit={handleConfirm} className='Form'>
            <label className='Label'>Nombre
            <input className ='Input' type ='text' value= {name} onChange= {({target}) => setName(target.value)}/>
            </label>

            <label className='Label'>
                Telefono
                <input 
                className='Input'
                type='text'
                value={phone}
                onChange= {({target}) => setPhone(target.value)}
                />
            </label>
            
            <label className='Label'> Email
                <input 
                className='Input'
                type='email'
                value={email}
                onChange= {({target}) => setEmail(target.value)}
                />
                </label>

            <div className='Label'>
                <button type= 'submit' className='Button'>Crear Orden</button>
            </div>           
            </form>    
           
       <div>CheckoutForm

       </div>
  </div>
    )
}

export default CheckoutForm;
/* VER QUE VARIABLES HACEN FALTA DECLARAR O LLAMAR
INDAGAR EN LOS OTROS ARCHIVOS */