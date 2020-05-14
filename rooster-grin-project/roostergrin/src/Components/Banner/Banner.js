import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import banner1 from "../../front-end-dev-test-assets/banner-1.jpg"
import './Banner.css'

class Banner extends React.Component {

  render () {
    return (

      <div class="bannerwrapper">
        <img src={this.props.name} />
      </div>

    )
  }
}

export default Banner
