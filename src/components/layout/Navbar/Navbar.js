import './Navbar.css';
import {Link} from "react-router-dom";
import {FaBars} from 'react-icons/fa'


const Navbar = () => {
    return(
        <div className={'navbar-container'}>
            <div className={'navbar-links'}>
                <Link className={'link'} to={'/'}>Home</Link>
            </div>
            <div className={'navbar-dropdown'}>
                <FaBars/>
            </div>
        </div>
    );
}

export default Navbar;