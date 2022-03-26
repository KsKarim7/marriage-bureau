import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart  } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Bride.css'

const Bride = (props) => {
    const {name, price, id, img, age} = props.bride;
    const {bride, handleClick} = props;

    return (
        <div className='mainBody'>
            <img src={img} alt="" />
            <div className='mainBody-info'>
            <p><small>Id: {id}</small></p>
            <h3 className='bride-name'>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Price (agency charge): ${price}</p>
            </div>
            <button onClick={() => handleClick(bride)} className='btn-section'>
                <p className='btn-text'>Like</p>
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
            </button>
        </div>
        
        
    );
};

export default Bride;