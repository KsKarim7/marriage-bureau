import './Banner.css'

import React, { createElement } from 'react';

const Banner = (props) => {
    const {banner} = props;
    console.log(banner)

    // let name = [];
    // for(const bride of banner){
    //     name = name + bride.name
    // }


    return (
        <div className='banner'>
            <div>
            <h1>Selected Brides</h1>
            </div>
            <ol>
                {
                    
                    banner.map(item => <ol key={item.id}>{item?.name}</ol>  )
                }
            </ol>
            <button className='button-section'><h2>CHOOSE 1 FOR ME</h2></button>
            <br />
            <button className='button-section'><h2>CHOOSE AGAIN</h2></button>
        </div>
    );
};

export default Banner;