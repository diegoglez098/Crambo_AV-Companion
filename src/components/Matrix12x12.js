import React from "react";
import '../App.css';
import {Container,Col,Row,Button,ButtonGroup,ToggleButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Matrix12x12() {
    return (
    <div className="Buttons">
        <Container>
        <Row className = "row">
          <Col className="columns">
          <p className = "App-font">Salidas</p>
  
          <ButtonGroup className="Buttons1"  vertical >
            <ButtonGroup size="lg">
              <Button><a className = "App-font3">1</a></Button>
              <Button><a className = "App-font3">2</a></Button>
              <Button><a className = "App-font3">3</a></Button>
              <Button><a className = "App-font3">4</a></Button>
            </ButtonGroup>
            <ButtonGroup size="lg">
              <Button><a className = "App-font3">5</a></Button>
              <Button variant="warning"><a className = "App-font3">6</a></Button>
              <Button><a className = "App-font3">7</a></Button>
              <Button><a className = "App-font3">8</a></Button>
            </ButtonGroup>
            <ButtonGroup size="lg">
              <Button><a className = "App-font3">9</a></Button>
              <Button><a className = "App-font3">10</a></Button>
              <Button><a className = "App-font3">11</a></Button>
              <Button><a className = "App-font3">12</a></Button>
            </ButtonGroup>
  
          </ButtonGroup>
          </Col>
          <Col className="columns">
          <p className = "App-font">Entradas</p>
          <ButtonGroup className="Buttons1"  vertical >
            <ButtonGroup size="lg">
              <Button><a className = "App-font3">1</a></Button>
              <Button><a className = "App-font3">2</a></Button>
              <Button><a className = "App-font3">3</a></Button>
              <Button><a className = "App-font3">4</a></Button>
            </ButtonGroup>
            <ButtonGroup size="lg">
              <Button variant="warning"><a className = "App-font3">5</a></Button>
              <Button><a className = "App-font3">6</a></Button>
              <Button><a className = "App-font3">7</a></Button>
              <Button><a className = "App-font3">8</a></Button>
            </ButtonGroup>
            <ButtonGroup size="lg">
              <Button><a className = "App-font3">9</a></Button>
              <Button><a className = "App-font3">10</a></Button>
              <Button><a className = "App-font3">11</a></Button>
              <Button><a className = "App-font3">12</a></Button>
            </ButtonGroup>
  
          </ButtonGroup>
          </Col>
          </Row>
        </Container>
      <br></br>
    </div>
    )
}