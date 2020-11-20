import React from 'react';
import './Header.css';

const Header = ({contador}) => {
    return (
        <div>
            <label>{contador}</label>
        </div>
    );
}

export default Header;