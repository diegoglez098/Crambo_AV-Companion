import React from "react"
import {Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function NavbarMain (){
    return (
    <div>     
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
        <img
            alt=""
            src={require('../images/logo.png')} 
            width="30"
            height="30"
            className="d-inline-block align-top"
        />{' '}
        Crambo AV Companion
            </Navbar.Brand>
 
        </Navbar>
        <br></br>
    </div> 
    )
}