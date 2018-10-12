import React, { Component } from 'react';
import bannerImage1 from './images/banner.jpeg';
import bannerImage2 from './images/banner1.jpeg';
import bannerImage3 from './images/banner2.jpeg';
import bannerImage4 from './images/banner3.jpeg'; 

import { Slide } from 'react-slideshow-image';


// const slideImages = [
//     '/banner.jpg',
//     'banner1.jpg',
//     'banner2.jpg',
//     'banner3.jpg',
// ];

const properties = {
    duration :5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}   


class ImageSlider extends Component {    

    render() { 
        return ( 
            <Slide {...properties}>
        <div className="each-slide">
            <div>
                <img src={bannerImage1} alt="No file" width="100%" />
            </div>
        </div>

        <div className="each-slide">
            <div>
                <img src={bannerImage2} alt="No file" width="100%" />
            </div>    
        </div>

        <div className="each-slide">
            <div>
                <img src={bannerImage3} alt="No file" width="100%" />
            </div>
        </div>                                          

        <div className="each-slide">
            <div>
                <img src={bannerImage4} alt="No file" width="100%" />
            </div>
        </div>
        
      </Slide>
        );
    }
}
 
export default ImageSlider;