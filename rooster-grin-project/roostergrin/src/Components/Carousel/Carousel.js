import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import TextBlock from '../TextBlock/TextBlock.js'
import stars from "../../front-end-dev-test-assets/stars.png"
import threeStars from "../../front-end-dev-test-assets/threeStars.png"
import img1 from "../../front-end-dev-test-assets/img-1.jpg"
import './Carousel.css'

let paragraphFillerText =  "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  "

class HeroCarousel extends React.Component {

  render () {
    return (
      <div class="carouselContainer" style={{height: "58vh", backgroundColor: "white", display:"block"}}>
      <Carousel>
          <Carousel.Item width={600} height={650}>
            <Carousel.Caption>
              <TextBlock review={[<i class="fas fa-quote-left"></i>, paragraphFillerText, <i class="fas fa-quote-right"></i>]} words="Matt 05/12/2020" image={[<img src={stars}/>]} pcolor="black"/>
            </Carousel.Caption>
            </Carousel.Item>
          <Carousel.Item width={600} height={400} >
            <Carousel.Caption>
              <TextBlock review={[<i class="fas fa-quote-left"></i>, paragraphFillerText, <i class="fas fa-quote-right"></i>]} words="Sai 05/14/2020" image={[<img src={stars}/>]}/>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item width={600} height={650}>
              <Carousel.Caption>
                <TextBlock paragraph={[<i class="fas fa-quote-left"></i>, paragraphFillerText, <i class="fas fa-quote-right"></i>]} words="Rooster 05/13/2020" image={[<img src={stars}/>]}/>
              </Carousel.Caption>
              </Carousel.Item>
      </Carousel>
      </div>

    )
  }
}

export default HeroCarousel
