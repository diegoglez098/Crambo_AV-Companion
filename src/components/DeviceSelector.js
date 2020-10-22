import React,{ useState, Component } from "react";
import '../App.css';
import {Container,Col,Row,Button,ButtonGroup,ToggleButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import TvIcon from '@material-ui/icons/Tv';

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
        <br></br>
        <Row>
          <Col>
            <Button conClick = { this.toggleMatrix }className='Button' variant="primary">
            <img 
            src={require('../images/servidor.png')} 
            alt="Matrix"
            width='70px'
            height='70px'
            />
            <br></br>
            <p className="App-font">BlackMagic</p>
            </Button>{' '}
          </Col>
          <Col>
            <Button className='Button'variant="success">
            <EmojiObjectsIcon  style={{ fontSize: 65,color: "white" }}/>
            <br></br>
            <p className="App-font">Iluminación</p>
            </Button>{' '}
          </Col>
          <Col>
            <Button className='Button'variant="danger">
            <TvIcon  style={{ 
            fontSize: 65 ,
            color: "white"
            }}/>
            <br></br>
            <p className="App-font">Monitor 1</p>
            </Button>{' '}
          </Col>
          <Col>
            <Button className='Button'variant="danger">
            <TvIcon  style={{ 
            fontSize: 65 ,
            color: "white"
            }}/>
            <br></br>
            <p className="App-font">Monitor 2</p>
            </Button>{' '}
          </Col>
        </Row>
      </Container> 
    );
    } 
  }

  export default DeviceSelector;
