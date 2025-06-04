import React from 'react';
import SilverRing from './assets/silver-ring.jpg';

function Card(){
    return(
        <div className='card'>
            <img className='Card-Image' src={SilverRing} alt="Profile Picture "></img>
            <h2>Wedding Ring</h2>
            <p>TYPE THINGGGGYYYYY RINGGGYYY LOOKING GOOODY</p>
        </div>
    );
}

export default Card;
