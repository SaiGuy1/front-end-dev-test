import React from 'react';
import Button from 'react-bootstrap/button'
import img1 from "../../front-end-dev-test-assets/hero.jpg"
import logo from "../../front-end-dev-test-assets/logo-white.svg"
import './Header.css'

class Hero extends React.Component {

  constructor(props, context) {
  super(props, context);

  this.handleClick = this.handleClick.bind(this);

  this.state = {
    isLoading: false
  };
}

handleClick() {
  this.setState({ isLoading: true });

  // This probably where you would have an `ajax` call
  setTimeout(() => {
    // Completed of async action, set loading state back
    this.setState({ isLoading: false });
  }, 2000);
}

  render () {

    const { isLoading } = this.state;

    return (
      <div class="herowrapper">
        <div class="header">
          <div id="logo">
            <img src={logo}/>
          </div>
          <div id="welcome">
            <span class="outline"> <h4> WELCOME TO </h4> </span>
            <h4> Rooster Grin </h4>
            <Button style={{backgroundColor: "#b579d2", fontSize:"400%", fontWeight:"Bold", fontSizeAdjust:"50%"}} disabled={isLoading} onClick={!isLoading ? this.handleClick : null}>
              {isLoading ? 'Thanks for Clicking Me :)' : 'BUTTON BUTTON'}
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
