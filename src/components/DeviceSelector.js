import React,{ useState, Component } from "react";
import '../App.css';
import {Container,Col,Row,Button,ButtonGroup,ToggleButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MatrixButton from "./MatrixButton";
import LightButton from "./LightButton";
import MonitorButton from "./MonitorButton";
import Pulse from 'react-reveal/Fade';
import Matrix12x12 from './Matrix12x12'
import OnOff from "./OnOff";

export default function DeviceSelector(props){

  const [openMatrix, toggleMatrix] = React.useState(false);

  const Matrixtoggle = () => {
    toggleMatrix(!openMatrix)
    toggleSwitch(false)

  }
  const [openToggle, toggleSwitch] = React.useState(false);

  const switchToggle = () => {
    toggleSwitch(!openToggle)
    toggleMatrix(false)
  }
  return (
      <Container className= "Selector">
        <Row>
          <Col>
          <MatrixButton name="BlackMagic" toggleMatrix={Matrixtoggle}/>
          </Col>
          <Col>
          <LightButton name= "Iluminación" Toggle={switchToggle}/>
          </Col>
          <Col>
          <MonitorButton name = "Monitor 1" />
          </Col>
          <Col>
          <MonitorButton name = "Monitor 2" />
          </Col>
        </Row>
        <Row style={{ display: (openMatrix ? 'block' : 'none') }} >
          <Col><Matrix12x12/></Col>
        </Row>
        <Row style={{ display: (openToggle ? 'block' : 'none') }} >
          <Col><Pulse><OnOff/></Pulse></Col>
        </Row>
      </Container> 
  )
}
