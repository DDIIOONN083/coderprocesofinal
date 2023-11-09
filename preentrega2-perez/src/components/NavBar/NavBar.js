/**
 * @Author: Your name
 * @Date:   2023-10-03 19:36:23
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-10-03 22:17:35
 */
import CartWidget from "../CartWidget/CartWidget";
import logoEcommerce from "./assets/logoEcommerce.png";
import "./style.css";
import { NavLink, Link } from "react-router-dom";

function NavBar (){

    //<img src={logoEcommerce} alt="Logo Neo Ecommerce"/>
    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <Link to="/">
                <h3 className="title" >Android Lab </h3>
            </Link>
            
            <div className="navbar-menu">
                <div className="columns">
                    <div className="column">
                        <NavLink to={`/category/celulares`} 
                        className={({isActive}) => isActive ? 'ActiveOption' : 'Option' 
                    }
                    style={({isActive }) => {
                        return {
                          color: isActive ? 'blue': 'black',
                          backgroundColor: isActive ? 'orange': 'red',
                          borderRadius: 20,
                        }
                        }}
                    >  Celulares</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/tablets`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
                        style={({isActive }) => {
                            return {
                              color: isActive ? 'blue': 'black',
                              backgroundColor: isActive ? 'orange': 'red',   borderRadius: 20,
                            }}} 
                        >Tablets</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/laptops`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
                        style={({isActive }) => {
                            return {
                              color: isActive ? 'blue': 'black',
                              backgroundColor: isActive ? 'orange': 'red' ,   borderRadius: 20, 
                            }}}
                        >Laptops</NavLink>
                    </div>
                </div>
                
                
                
                
            </div>
            <CartWidget/>
            </div>
            
            
        </nav>

    )
}

export default NavBar;