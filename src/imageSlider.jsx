import React, { Component } from 'react';

import { Slide } from 'react-slideshow-image';


// const slideImages = [
//     './images/banner.jpeg',
//     'images/banner1.jpg',
//     'images/banner2.jpeg',
//     'images/banner3.jpeg',
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
        <div>    {/* <div style={{'backgroundImage': `url(${slideImages[0]})`}}> */}
            <span>Slide 1
                <img src="banner.jpeg" alt="No file"/>
            </span>
          </div>
        </div>
        <div className="each-slide">
            <div>   {/*  style={{'backgroundImage': `url(${slideImages[1]})`}}> */}
            <span>Slide 2
            <img src="banner1.jpeg" alt="No file"/>
            </span>
            </div>
        </div>
        <div className="each-slide">
        <div> {/*  style={{'backgroundImage': `url(${slideImages[2]})`}}> */}
            <span>Slide 3
            <img src="banner2.jpeg" alt="No file"/>
            </span>
          </div>
        </div>
        <div className="each-slide">
        <div> {/*  style={{'backgroundImage': `url(${slideImages[2]})`}}> */}
            <span>Slide 4
            <img src="banner3.jpeg" alt="No file"/>
            </span>
          </div>
        </div>
      </Slide>
        );
    }
}
 
export default ImageSlider;