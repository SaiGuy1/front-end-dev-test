import React from 'react';
import Button from 'react-bootstrap/button'
import img1 from "../../front-end-dev-test-assets/hero.jpg"
import logo from "../../front-end-dev-test-assets/logo-white.svg"
import './Header.css'

class Hero extends React.Component {

  render () {
    return (
      <div class="herowrapper">
        <div class="header">
          <div id="logo">
            <img src={logo}/>
          </div>
          <div id="welcome">
            <h4> WELCOME TO </h4>
            <h4> ROOSTER GRIN </h4>
            <Button size="lg">BUTTON BUTTON</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
