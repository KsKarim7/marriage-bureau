import React, { useEffect, useState } from 'react';
import Bride from '../Bride/Bride';
import Banner from '../Banner/Banner'
import './Brides.css'


const Brides = () => {
    const [brides, setBrides] = useState([]);
    
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBrides(data))

    }, [] );

    const handleClick = (bride) =>{
        console.log(bride);
    }

    return (
        <div className='container'>
            <div className='bride-container'>
            {
                brides.map(bride => <Bride 
                    key ={bride.id}
                    bride ={bride}
                    handleClick={handleClick}
                    ></Bride>)
            }
            </div>

            <div className='banner-container'>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Brides;
