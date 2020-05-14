import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/button'
import banner1 from "../../front-end-dev-test-assets/banner-1.jpg"
import BannerWords from "../BannerWords/BannerWords.js"
import './Banner.css'

class Banner extends React.Component {

  render () {
    return (

      <div class="bannerwrapper">
        <img src={this.props.name} />
        <div class="bannerwords"style={{right: `${this.props.right}`, paddingLeft: `${this.props.left}`}}>
          LOREM IPSUM <br></br>
          <div class="paragraph">
            {this.props.bannerTwoWords}
            <br></br>
            <Button style={{backgroundColor: "#ff7043"}} size="lg">BUTTON BUTTON</Button>
          </div>
        </div>
      </div>

    )
  }
}

export default Banner
