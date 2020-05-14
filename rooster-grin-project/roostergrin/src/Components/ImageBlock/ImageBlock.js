import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import img1 from "../../front-end-dev-test-assets/img-1.jpg"
import './ImageBlock.css'



class ImageBlock extends React.Component {
  render() {
    return (
      <div class='imagewrapper' style={{border: `${this.props.size} solid ${this.props.border}`, borderRadius:`${this.props.radius}`, padding:`${this.props.padding}`}}>
        <img src={this.props.name} alt={"image"}  />
      </div>
    )
  }
}

export default ImageBlock;
