import React,{ useState, Component } from 'react';
import './App.css';
import {Container,Col,Row,Button,ButtonGroup,ToggleButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Matrix12x12 from "./components/Matrix12x12"
import NavbarMain from "./components/Navbar"
import DeviceSelector from "./components/DeviceSelector"
import GetRequest from "./components/GetRequest"
import Alert from "./components/Alert"

import Addbutton from './components/Addbutton';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavbarMain />
      <b className = "App-font3">Mis dispositivos</b>
      <br></br>
        <DeviceSelector />
      
      <br></br>
      <div className="FloatingMenu"><Addbutton /></div>
      </div>
    );
    } 
}

export default App;