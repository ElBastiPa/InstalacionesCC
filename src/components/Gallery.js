import React from 'react';
import './Gallery.css'
import photo1 from './img/photo1.jpg';
import photo2 from './img/photo2.jpg';

const Gallery = () => {
    return (
        <div>
            <img className='p1' src={photo1} alt="photo1" />
            <img className='p2' src={photo2} alt="photo2" />
            <h2>Experto en instalaciones eléctricas empresariales y hogareñas</h2>
        </div>
    );
}

export default Gallery;