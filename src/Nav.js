import {Link} from 'react-router-dom'
import './Nav.css'
let Nav=()=>{
    return(
        <nav>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
        </nav>
    )
}
export default Nav