import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import img1 from "../../front-end-dev-test-assets/hero.jpg"
import logo from "../../front-end-dev-test-assets/logo-white.svg"
import './Header.css'

class Hero extends React.Component {

  render () {
    return (
      <div class="herowrapper">
        <div class="logo">
          <img src={logo}/>
        </div>
        <div id="welcome">

        </div>
      </div>
    )
  }
}

export default Hero
