import React, {Component} from 'react';
import Menu from '../Menu/Menu';
import logocomm from './logocomm.jpg';
import './style.scss';

class Navbar extends Component {
    render(){
        return(
            <div className='navbar'>
                <Menu className='menu'/>
                <h1>
                    Studio Commerciale
                </h1>
                <div className="img">
                    <img className="img" src={logocomm} alt="logocomm" />
                </div>
            </div>
        );
    }
}

export default Navbar;