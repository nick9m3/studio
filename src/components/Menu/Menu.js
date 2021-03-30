import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './style.scss';

class Menu extends Component{
    constructor(){
        super();

        this.state = {
            showMenu: false,
        }
        this.showMenu =this.showMenu.bind(this);
        this.dropdownMenu =React.createRef();
    }

    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: !this.state.showMenu })
    }
    render(){
        return(
            <div>
                <div className='button' onClick={this.showMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            {
                this.state.showMenu ? (
                    <div className='menu' ref={element => {
                        this.dropdownMenu = element;}}>
                        <Link className="link" to="/">HOME</Link>
                        <Link className="link" to="/News">NOTIZIE</Link>
                        <Link className="link" to="/Servizi">SERVIZI</Link>
                    </div>
                ) :
                (null)
            }
            </div>
        );
    }
}

export default Menu;