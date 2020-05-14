import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import img1 from "../../front-end-dev-test-assets/img-1.jpg"
import './Carousel.css'

class HeroCarousel extends React.Component {

  render () {
    return (

    <Carousel style={{backgroundColor: "f2f2f2", margin:'5vw'}}>
      <Carousel.Item>
        <Carousel.Caption>
          <h2>First slide label</h2>
          <h2>Nulla vitae elit libero, a pharetra augue mollis interdum.</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h2>Second slide label</h2>
          <h2>Nulla vitae elit libero, a pharetra augue mollis interdum.</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h2>Third slide label</h2>
          <h2>Nulla vitae elit libero, a pharetra augue mollis interdum.</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
  }
}

export default HeroCarousel
