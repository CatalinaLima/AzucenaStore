import { useContext, useEffect } from 'react'
import { cartContext } from '../../context/cartContext'
import './NavBar.css'
import {Link, useLocation} from 'react-router-dom'
import cart from '/assets/cart.jpg'




export default function NavBar() {

    let location = useLocation()
    useEffect (() => {
        window.scrollTo()
    }, [location])


    return (
        <nav className="NavBar">
            <ul className="nav-menu">
                <li className="logo">
                    <h2>
                        <Link to="/">
                            <img src={'/assets/azucenalogo.png'} alt="Logo" />
                        </Link>
                    </h2>
                </li>
    
                <li className="cart-widget">
                    <CartWidget />
                </li>
            </ul>
        </nav>
        );
    }

function CartWidget () {
    const {countItems} = useContext (cartContext)
    return (
    <Link to='/cart'>
        <img className='CartImg' src={cart} alt="carrito de compras" />
        <span>{countItems()}</span>
    </Link>
    )
}




