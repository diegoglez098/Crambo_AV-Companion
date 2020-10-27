import React from "react"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row,Button} from 'react-bootstrap'

export default function OnOff(){
  return (
    <Container className= "Selector">
        <Row>
            <Col>
            <Button>ON</Button>
            </Col>
            <Col>
            <Button>OFF</Button>
            </Col>
        </Row>
    </Container>
  )

}
