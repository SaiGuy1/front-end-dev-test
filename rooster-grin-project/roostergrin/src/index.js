import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import HeroCarousel from './Components/Header/Header.js'
import TextBlock from './Components/TextBlock/TextBlock.js'
import ImageBlock from './Components/ImageBlock/ImageBlock.js'
import Banner from './Components/Banner/Banner.js'
import {Container, Col, Row} from 'react-bootstrap'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  <Container fluid>
    <Row>
    <Col xs={12} md={12}>
      <HeroCarousel />
    </Col>
    </Row>
    <Row >
      <Col xs={12} md={6} lg={6}>
        <TextBlock />
      </Col>
      <Col xs={12} md={6} lg={6}>
        <ImageBlock />
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={12}>
        <Banner />
      </Col>
    </Row>
    <Row >
      <Col xs={12} md={6} lg={6}>
        <TextBlock />
      </Col>
      <Col xs={12} md={6} lg={6}>
        <ImageBlock />
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={12}>
        <Banner />
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
