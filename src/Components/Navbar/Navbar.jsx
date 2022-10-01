
import React from 'react';
import './Navbar.css'

import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'
const Navbar = () => {
    return (
        <div className="n-wrapper" id='Navbar'>
             <div className="n-left">
                <div className="n-name">Abhay</div>
                {/* <span>toggle</span> */}
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <Link spy={true}  to='Navbar' smooth={true} activeclass={"activeclass"}>
                            <li>Home</li>
                        </Link>
                        <Link spy={true}  to='Service' smooth={true}>
                            <li>Service</li>    
                        </Link>
                        <Link spy={true}  to='Experince' smooth={true}>
                            <li>Experince</li>   
                        </Link>
                        <Link spy={true}  to='Works' smooth={true}>
                            <li>Technology</li>   
                        </Link>
                        {/* <Link spy={true}  to='Protfolio' smooth={true}>
                            <li>Protfolio</li>
                        </Link> */}
                    </ul>
                </div>
                 
                 <Link spy={true} smooth={true} to='Contact' >
                                  <button className="button n-button">
                    Contact
                </button>
                </Link>
  
            </div>               

        </div>

    );
}

export default Navbar;