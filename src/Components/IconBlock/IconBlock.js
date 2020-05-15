import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {Container, Col, Row} from 'react-bootstrap'
import icon1 from "../../front-end-dev-test-assets/home-expertise.svg"
import icon2 from "../../front-end-dev-test-assets/home-hygiene.svg"
import icon3 from "../../front-end-dev-test-assets/home-lab.svg"
import icon4 from "../../front-end-dev-test-assets/home-retention.svg"
import TextBlock from '../TextBlock/TextBlock.js'
import ImageBlock from '../ImageBlock/ImageBlock.js'
import './IconBlock.css'



class IconBlock extends React.Component {

  render() {
    return (
      <>
      <div class="backdrop" style={{margin: "", textAlign: "center"}}>
        <Row>
          <div class="icons">
            <Col xs={12} md={3} style={{margin: "6vw", textAlign: "center"}}>
              <ImageBlock name={icon1} border="purple" size="5px" radius="50%" padding="45px"/>
              <TextBlock caption="LOREM"/>
              <ImageBlock name={icon3} border="purple" size="5px" radius="50%" padding="45px"/>
              <TextBlock caption="LOREM IPSUM"/>
            </Col>
            <Col xs={12} md={3} style={{margin: "6vw"}}>
              <ImageBlock name={icon2} border="purple" size="5px" radius="50%" padding="45px"/>
              <TextBlock caption="LOREM"/>
              <ImageBlock name={icon4} border="purple" size="5px" radius="50%" padding="45px"/>
              <TextBlock caption="LOREM IPSUM"/>
            </Col>
          </div>
        </Row>
      </div>
      </>
    )
  }
}

export default IconBlock;
