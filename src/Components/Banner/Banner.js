import './Banner.css'

import React from 'react';

const Banner = () => {
    return (
        <div className='banner'>
            <div>
            <h1>Selected Brides</h1>
            </div>
            <button className='button-section'><h2>CHOOSE 1 FOR ME</h2></button>
            <br />
            <button className='button-section'><h2>CHOOSE AGAIN</h2></button>
        </div>
    );
};

export default Banner;