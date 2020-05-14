import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import img1 from "./front-end-dev-test-assets/img-1.jpg"
import banner1 from "./front-end-dev-test-assets/banner-1.jpg"
import banner2 from "./front-end-dev-test-assets/banner-2.jpg"
import App from './Components/App';
import Hero from './Components/Header/Header.js'
import TextBlock from './Components/TextBlock/TextBlock.js'
import ImageBlock from './Components/ImageBlock/ImageBlock.js'
import IconBlock from './Components/IconBlock/IconBlock.js'
import Banner from './Components/Banner/Banner.js'
import {Container, Col, Row} from 'react-bootstrap'
import * as serviceWorker from './serviceWorker';

let paragraphFillerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

ReactDOM.render(
  <React.StrictMode>
    <App />
  <Container fluid>
    <Row>
      <Col xs={12} md={12}>
        <Hero />
      </Col>
    </Row>
    <Row >
      <Col xs={12} md={6} lg={6}>
        <TextBlock words="LOREM IPSUM" paragraph={paragraphFillerText} color="purple" link="> Lorem Ipsum "/>
      </Col>
      <Col xs={12} md={6} lg={6}>
        <ImageBlock name={img1}/>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={12}>
        <Banner name={banner1}/>
      </Col>
    </Row>
    <Row >
      <Col xs={12} md={6} lg={6}>
        <TextBlock words="LOREM IPSUM" paragraph={paragraphFillerText} color="black" link="> Lorem Ipsum "/>
      </Col>
      <Col xs={12} md={6} lg={6}>
        <IconBlock />
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={12}>
        <Banner name={banner2}/>
      </Col>
    </Row>
  </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
