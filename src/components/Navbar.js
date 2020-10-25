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
        </Navbar>
        <br></br>
    </div> 
    )
}