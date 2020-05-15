import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Stars from "../../front-end-dev-test-assets/star-01.gif"
import './TextBlock.css'


class TextBlock extends React.Component {

    _hideImage = () => this.style.display({ disabled: true })

  render() {
    return (
      <div class="words">
        <h2 style={{color:`${this.props.color}`}}>{this.props.words}</h2>
        <p>{this.props.paragraph}</p>
        <p class="review" style={{color:`black`}}>{this.props.review}</p>
        <p style={{width:"50%"}}>{this.props.image}</p>
        <h3 style={{color:`Black`, textAlign:'Center', marginLeft:'-10%', fontWeight:'bold', fontSize: '3vh'}}>{this.props.caption}</h3>
        <p><a href='#'>{this.props.link}</a></p>
      </div>
    )
  }
}

export default TextBlock;
