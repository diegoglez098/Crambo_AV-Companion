import React,{ useState, Component } from "react";
import '../App.css';
import {Container,Col,Row,Button,ButtonGroup,ToggleButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class DeviceSelector extends Component {
    constructor( props ) {
      super(props)
      this.state = {show : false};
  
      this.toggleMatrix = this.toggleMatrix.bind(this)
    }
    toggleMatrix = () => {
      const { show } = this.state;
      this.setState({ show: !show })
    }
  render() {
    return (
        <Container>
        <Row>
          <Col>
            <Button conClick = { this.toggleMatrix }className='Button' variant="primary">
            <img 
            src={require('../images/servidor.png')} 
            alt="Matrix"
            width='100px'
            height='100px'
            />
            <br></br>
            <a className="App-font">BlackMagic</a>
            </Button>{' '}
          </Col>
          <Col>
            <Button className='Button'variant="success">
            <img 
            src={require('../images/iluminacion.png')} 
            alt="Matrix"
            width='100px'
            height='100px'
            />
            <br></br>
            <a className="App-font">Iluminación</a>
            </Button>{' '}
          </Col>
          <Col>
            <Button className='Button'variant="danger">
            <img 
            src={require('../images/tv.png')} 
            alt="Matrix"
            width='100px'
            height='100px'
            />
            <br></br>
            <a className="App-font">Monitor 1</a>
            </Button>{' '}
          </Col>
          <Col>
            <Button className='Button'variant="danger">
            <img 
            src={require('../images/tv.png')} 
            alt="Matrix"
            width='100px'
            height='100px'
            />
            <br></br>
            <a className="App-font">Monitor 2</a>
            </Button>{' '}
          </Col>
        </Row>
      </Container> 
    );
    } 
  }

  export default DeviceSelector;
