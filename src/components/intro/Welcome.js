import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
//Slide images
import Slide1 from '../../assets/images/carousel/slide1.PNG';
import Slide2 from '../../assets/images/carousel/slide2.PNG';
import Slide3 from '../../assets/images/carousel/slide3.jpg';
//Style
import '../intro/Welcome.css'

const Welcome = () => {
  return (
    <Carousel controls={false} 
              interval={2000}
              pause={false}>
        <Carousel.Item>
            <img className="d-block w-100 slides"
                 src={Slide1}
                 alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100 slides"
                 src={Slide2}
                 alt="Second slide"/>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100 slides"
                 src={Slide3}
                 alt="Third slide"/>
        </Carousel.Item>
    </Carousel>
  )
}

export default Welcome
