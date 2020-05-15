import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import banner1 from "../../front-end-dev-test-assets/banner-1.jpg"
import facebookLogo from "../../front-end-dev-test-assets/facebook.svg"
import instagramLogo from "../../front-end-dev-test-assets/instagram.svg"
import './Footer.css'

class Footer extends React.Component {

  render () {
    return (

      <div class="container">
        <span class="text-muted">Follow Us:</span>
        <br></br>
        <img src={facebookLogo} style={{width: "4%", marginTop: '25px', marginBottom: '25px', color: 'purple', fill: 'purple'}}/>
        <img src={instagramLogo} style={{width: "4%", marginTop: '25px', marginBottom: '25px'}}/>
      </div>
    )
  }
}

export default Footer
