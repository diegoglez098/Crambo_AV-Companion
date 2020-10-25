import React,{ useState, Component } from "react";
import '../App.css';
import {Container,Col,Row,Button,ButtonGroup,ToggleButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MatrixButton from "./MatrixButton";
import LightButton from "./LightButton";
import MonitorButton from "./MonitorButton";

export default function DeviceSelector(props){
  return (
      <Container className= "Selector">
        <br></br>
        <Row>
          <Col>
          <MatrixButton name="BlackMagic" />
          </Col>
          <Col>
          <LightButton name= "Iluminación" />
          </Col>
          <Col>
          <MonitorButton name = "Monitor 1" />
          </Col>
          <Col>
          <MonitorButton name = "Monitor 2" />
          </Col>

        </Row>
      </Container> 
  )
}
