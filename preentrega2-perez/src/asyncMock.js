/**
 * @Author: Your name
 * @Date:   2023-10-03 19:37:41
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-10-03 21:35:07
 */
//import Producto from "./pages/producto"

const lista_productos = [
    {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "celulares",
    "image": "https://media.naheed.pk/catalog/product/cache/ed9f5ebe2a117625f6cd6336daddd764/1/2/1209235-1.jpg",
    "stock": 120,
    "rating": {
    "rate": 3.9,
    
    "lala": 5
    }
    },
    {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "celulares",
    "image": "https://top10smartfonov.ru/wp-content/uploads/thumbs_dir/csm_4_3_Teaser_Samsung_Galaxy_Note20_Ultra_5G_SM-N986B_MysticWhite_f4a260a140-oz90ivp4jalujnig0auyywddbalcw99adwt1pgs0ok.jpg",
    "stock": 259,
    "rating": {
    "rate": 4.1
    
    }
    },
    {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "celulares",
    "image": "https://researchsnipers.com/wp-content/uploads/2021/05/Apple-Foldable.png",
    "stock": 500,
    "rating": {
    "rate": 4.7
    
    }
    },
    {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "tablets",
    "image": "https://images.pcel.com/1600/Computadoras-Tablets-Samsung-SM-T733NZKLMXO-406734-iAoFbYyL0k8Eh2Gq.jpg",
    "stock": 430,
    "rating": {
    "rate": 2.1
    
    }
    },
    {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "laptops",
    "image": "https://graffica.info/wp-content/uploads/2022/01/71b5LkytaL._AC_SL1500_-1140x815.jpg",
    "stock": 400,
    "rating": {
    "rate": 4.6
    
    }
    },
    {
        "id": 7,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "laptops",
        "image": "https://graffica.info/wp-content/uploads/2022/01/617Pzql01TS._AC_SL1500_.jpg",
        "stock": 500,
        "rating": {
        "rate": 4.7
        
        }

}

    ]

   // export default lista_productos;

   export const getProductos = ()=>{

    return new Promise((resolve)=>{

        setTimeout ( ()=> {

            //let cantidad  = Math.floor(Math.random() * lista_productos.length);
            //console.log("Cantidad de productos devueltos en el asyncMock:", cantidad);
            resolve(lista_productos);

                },500)
        }  )
   }

   export const getProductById = (idProduct)=>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.find( prod => prod.id == idProduct))
        }, 500);
        
    })

   }

   export const getProductsByCategory = (category)=>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.filter( prod => prod.category == category ))
        }, 500);
    })

   }