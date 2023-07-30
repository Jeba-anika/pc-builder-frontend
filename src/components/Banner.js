import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-text'>
                <div>Build Your Own PC and Get Gadgets at lowest price.</div>
                <p style={{ fontSize: '20px' }}>We have all your desired products. Check our featured category and featured products to get your desired ones</p>
            </div>
            <Image width={300} height={300} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREKAvfuELIOo4CzAlQIXhhPTVTp5k4wljcA&usqp=CAU' alt='banner-image'></Image>
        </div>
    );
};

export default Banner;