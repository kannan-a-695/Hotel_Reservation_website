import {Link} from 'react-router-dom'
import './Navbar.css'
export const Navbar=()=>{
    return(
        <div>
            <nav>
                <Link to='/'style={{textDecoration:'none'}}>Home</Link>
                <Link to='/about'style={{textDecoration:'none'}}>About Us</Link>
                <Link to='/contact'style={{textDecoration:'none'}}>Contact Us</Link>
                <Link to='/location'style={{textDecoration:'none'}}>Location</Link>
                <Link to='/booking'style={{textDecoration:'none'}}>Booking</Link>
                <Link to='/room'style={{textDecoration:'none'}}>Room</Link>
                <Link to='/login'style={{textDecoration:'none'}}>Login</Link>
            </nav>
        </div>
    )
}