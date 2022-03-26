import React from 'react';
import './Bride.css'

const Bride = (props) => {
    const {name, price, id, img, age} = props.bride;
    return (
        <div className='mainBody'>
            <img src={img} alt="" />
            <div className='mainBody-info'>
            <p><small>Id: {id}</small></p>
            <h3 className='bride-name'>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Price (agency charge): ${price}</p>
            </div>
            <button className='btn-section'>
                <p className='btn-text'>Like</p>
            </button>
        </div>
        
        
    );
};

export default Bride;