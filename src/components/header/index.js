import React from 'react';
import './styles.scss';
import Logo from '../../assets/logo.png'
const Header = () => (
    <header data-test="headerComponent">
        <div className="wrap">
            <div className="logo" data-test="logoComponent">
                <img src={Logo} alt="logo" />
            </div>
        </div>
    </header>
);

export default Header;