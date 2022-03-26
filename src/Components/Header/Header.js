import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRing  } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>P-Heroine Marriage Bureau</h1>
            <h2>Choose 4 bride you liked the most!! <FontAwesomeIcon icon ={faRing}></FontAwesomeIcon></h2>
        </div>
    );
};

export default Header;