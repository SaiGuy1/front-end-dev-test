import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/button'
import banner1 from "../../front-end-dev-test-assets/banner-1.jpg"
import BannerWords from "../BannerWords/BannerWords.js"
import './Banner.css'

class Banner extends React.Component {
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

      <div class="bannerwrapper">
        <img src={this.props.name} />
        <div class="bannerwords"style={{right: `${this.props.right}`, paddingLeft: `${this.props.left}`}}>
          LOREM IPSUM <br></br>
          <div class="paragraph">
            {this.props.bannerTwoWords}
            <br></br>
            <Button style={{backgroundColor: "#ff7043"}} disabled={isLoading} onClick={!isLoading ? this.handleClick : null}>
              {isLoading ? 'Thanks for Clicking Me :)' : 'BUTTON BUTTON'}
            </Button>
          </div>
        </div>
      </div>

    )
  }
}

export default Banner
