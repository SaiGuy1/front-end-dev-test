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
        <p>{this.props.review}</p>
        <p>{this.props.image}</p>
        <h3><a href='#'>{this.props.link}</a></h3>
      </div>
    )
  }
}

export default TextBlock;
