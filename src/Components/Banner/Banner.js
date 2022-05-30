import './Banner.css'

import React, { createElement } from 'react';

const Banner = (props) => {
    // const {banner} = props;
    // console.log(banner)
    const {banner, removeItem} = props
    // let name = [];
    // for(const bride of banner){
    //     name = name + bride.name
    // }

    // const [banner, setBanner] = useState([])

    return (
        <div className='banner'>
            <div>
            <h1>Selected Brides</h1>
            </div>
            <h1>{banner.name}</h1>
            <button className='button-section'><h2>CHOOSE 1 FOR ME</h2></button>
            <br />
            <button onClick={removeItem} className='button-section'><h2>CHOOSE AGAIN</h2></button>
        </div>
    );
};

export default Banner;