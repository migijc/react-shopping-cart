import {Link} from "react-router-dom"
import {FiShoppingCart} from "react-icons/fi"

export default function Header(props){

    return(
        <div id="header">
            <p className="pageTitle">Trends4Drop</p>
            <nav className="navBar">
                <Link to="/">Home</Link>
                <Link to="products">Products</Link>
                <Link to="shoppingCart" className="cart">
                    <div className="cartIconContainer">
                        <FiShoppingCart/>
                        {props.totalItems>=1 && <div className="itemsAmount">{props.totalItems}</div>}
                    </div>
                </Link>
            </nav>
        </div>
    )
}