import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({history, user}) =>{

const hadleLogout = () =>{
    // logout().then( () => {
    //     history.push('/');
    // });

};

return(

<div>
    <header>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/Items">Items</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/new-item">New Item</Link>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a
                            href=""
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"> {user}
                            <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="#" onClick={hadleLogout}>logout</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</div>

);


}

export default Navbar;