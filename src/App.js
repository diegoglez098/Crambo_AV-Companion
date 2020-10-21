import React,{ useState, Component } from 'react';
import './App.css';
import {Container,Col,Row,Button,ButtonGroup,ToggleButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Matrix12x12 from "./components/Matrix12x12"
import NavbarMain from "./components/Navbar"
import DeviceSelector from "./components/DeviceSelector"
import GetRequest from "./components/GetRequest"

 class App extends Component {
render() {
  return (
    <div className="App">
    <NavbarMain />
      <DeviceSelector />
    <hr className="Divider"></hr>
    <GetRequest />
    <Matrix12x12/>
    </div>
  );
  } 
}

export default App;
