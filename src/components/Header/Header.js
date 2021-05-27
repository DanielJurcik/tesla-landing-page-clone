import React from 'react';
import TeslaLogo from '../../assets/danielLogo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img class="page-logo" src={TeslaLogo} alt="Tesla logo"/>
            </div>

            <div className="header__center" id="nav-bar">
                <a>Model S</a>
                <a>Model 3</a>
                <a>Model X</a>
                <a>Model Y</a>
                <a>Solar Roof</a>
                <a>Solar Panels</a>
            </div>
            <div className="header__right">
                <p>Tesla Account</p>
            </div>
        </div>
    );
};

export default Header;