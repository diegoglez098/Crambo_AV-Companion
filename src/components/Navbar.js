import React from "react"
import {Nav, Navbar,NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function NavbarMain (){
    return (
    <div>     
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
        <img
            alt=""
            src={require('../images/logo.png')} 
            width="30"
            height="30"
            className="d-inline-block align-top"
        />{' '}
        <b>Crambo AV Companion</b>
            </Navbar.Brand>
            <Nav className="mr-auto">
      <Nav.Link href="/">Inicio</Nav.Link>
      <Nav.Link href="/settings">Configuración</Nav.Link>
      <NavDropdown title="Dispositivos compatibles" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">BlackMagic</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Sonoff</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Shelly</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Solicitar dispositivo</NavDropdown.Item>
      </NavDropdown>
    </Nav>
        </Navbar>
        <br></br>
    </div> 
    )
}