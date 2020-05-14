import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './TextBlock.css'


class TextBlock extends React.Component {
  render() {
    return (
      <div class="words">
        <h2 style={{color:`${this.props.color}`}}>{this.props.words}</h2>
        <p>{this.props.paragraph}</p>
        <h3><a href='#'>{this.props.link}</a></h3>
      </div>
    )
  }
}

export default TextBlock;
