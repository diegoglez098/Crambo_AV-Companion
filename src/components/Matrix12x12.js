import React, { useState } from "react";
import '../App.css';
import {Container,Col,Row,Button,ButtonGroup,ToggleButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import SendIcon from '@material-ui/icons/Send';
import Pulse from 'react-reveal/Fade';

export default function Matrix12x12(props) {
  const [output,setOutput] = useState(0)
  const [input,setInput] = useState(0)
  
  const sendRouting = () =>{
    console.log(output,input)
    if(input==0 && output ==0){
      alert("Debe seleccionar una entrada y salida de la matriz")
    }
    else if (output==0){
      alert("Seleccione una salida de la matriz")
    }
    else if(input == 0){
      alert("Seleccione una entrada de la matriz")
    }
    else{
      var http = new XMLHttpRequest();
      http.open("POST", 'http://192.168.0.220:5000/API/v1.0/blackmagic', true);
      http.setRequestHeader("Content-Type", "application/json");
      http.setRequestHeader("Access-Control-Allow-Origin", "*");
      http.setRequestHeader("Accept", "*/*");

      http.send(JSON.stringify({Input:input, Output: output}));
      alert("Enviado correctamente")
    }

  }


//Salida 1
  var [outputColor1,setColor1] = useState('primary')

  const saveOutput1 = (out) => {
    if (outputColor1=='warning'){
      setOutput(0)
      setColor1(outputColor1='primary')
    }
    else {
      setOutput(out)
      setColor1(outputColor1='warning')
      setColor2(outputColor2='primary')
      setColor3(outputColor2='primary')
      setColor4(outputColor2='primary')
      setColor5(outputColor2='primary')
      setColor6(outputColor2='primary')
      setColor7(outputColor2='primary')
      setColor8(outputColor2='primary')
      setColor9(outputColor2='primary')
      setColor10(outputColor2='primary')
      setColor11(outputColor2='primary')
      setColor12(outputColor2='primary')
    }
  }
//Salida 2
  var [outputColor2,setColor2] = useState('primary')

  const saveOutput2 = (out) => {
    if (outputColor2=='warning'){
      setOutput(0)
      setColor2(outputColor2='primary')
    }
    else {
      setOutput(out)
      setColor1(outputColor1='primary')
      setColor2(outputColor2='warning')
      setColor3(outputColor2='primary')
      setColor4(outputColor2='primary')
      setColor5(outputColor2='primary')
      setColor6(outputColor2='primary')
      setColor7(outputColor2='primary')
      setColor8(outputColor2='primary')
      setColor9(outputColor2='primary')
      setColor10(outputColor2='primary')
      setColor11(outputColor2='primary')
      setColor12(outputColor2='primary')
    }
  }

//Salida 3
  var [outputColor3,setColor3] = useState('primary')

  const saveOutput3 = (out) => {
    if (outputColor3=='warning'){
      setOutput(0)
      setColor3(outputColor3='primary')
    }
    else {
      setOutput(out)
      setColor1(outputColor1='primary')
      setColor2(outputColor2='primary')
      setColor3(outputColor2='warning')
      setColor4(outputColor2='primary')
      setColor5(outputColor2='primary')
      setColor6(outputColor2='primary')
      setColor7(outputColor2='primary')
      setColor8(outputColor2='primary')
      setColor9(outputColor2='primary')
      setColor10(outputColor2='primary')
      setColor11(outputColor2='primary')
      setColor12(outputColor2='primary')
    }
    
  }
//Salida 4 
  var [outputColor4,setColor4] = useState('primary')

  const saveOutput4 = (out) => {
    if (outputColor4=='warning'){
      setOutput(0)
      setColor4(outputColor4='primary')
    }
    else {
      setOutput(out)
      setColor1(outputColor1='primary')
      setColor2(outputColor2='primary')
      setColor3(outputColor2='primary')
      setColor4(outputColor2='warning')
      setColor5(outputColor2='primary')
      setColor6(outputColor2='primary')
      setColor7(outputColor2='primary')
      setColor8(outputColor2='primary')
      setColor9(outputColor2='primary')
      setColor10(outputColor2='primary')
      setColor11(outputColor2='primary')
      setColor12(outputColor2='primary')
    }
    
  }
//Salida 5
  var [outputColor5,setColor5] = useState('primary')

  const saveOutput5 = (out) => {
    if (outputColor5=='warning'){
      setOutput(0)
      setColor5(outputColor5='primary')
    }
    else {
      setOutput(out)
      setColor1(outputColor1='primary')
      setColor2(outputColor2='primary')
      setColor3(outputColor2='primary')
      setColor4(outputColor2='primary')
      setColor5(outputColor2='warning')
      setColor6(outputColor2='primary')
      setColor7(outputColor2='primary')
      setColor8(outputColor2='primary')
      setColor9(outputColor2='primary')
      setColor10(outputColor2='primary')
      setColor11(outputColor2='primary')
      setColor12(outputColor2='primary')
    }
    
  }

//Salida 6
  var [outputColor6,setColor6] = useState('primary')

  const saveOutput6 = (out) => {
    if (outputColor6=='warning'){
      setOutput(0)
      setColor6(outputColor6='primary')
    }
    else {
      setOutput(out)
      setColor1(outputColor1='primary')
      setColor2(outputColor2='primary')
      setColor3(outputColor2='primary')
      setColor4(outputColor2='primary')
      setColor5(outputColor2='primary')
      setColor6(outputColor2='warning')
      setColor7(outputColor2='primary')
      setColor8(outputColor2='primary')
      setColor9(outputColor2='primary')
      setColor10(outputColor2='primary')
      setColor11(outputColor2='primary')
      setColor12(outputColor2='primary')
    }
    
  }
//Salida 7
  var [outputColor7,setColor7] = useState('primary')

  const saveOutput7 = (out) => {
    if (outputColor7=='warning'){
      setOutput(0)
      setColor7(outputColor7='primary')
    }
    else {
      setOutput(out)
      setColor1(outputColor1='primary')
      setColor2(outputColor2='primary')
      setColor3(outputColor2='primary')
      setColor4(outputColor2='primary')
      setColor5(outputColor2='primary')
      setColor6(outputColor2='primary')
      setColor7(outputColor2='warning')
      setColor8(outputColor2='primary')
      setColor9(outputColor2='primary')
      setColor10(outputColor2='primary')
      setColor11(outputColor2='primary')
      setColor12(outputColor2='primary')
    }
  }

  //Salida 8 
  var [outputColor8,setColor8] = useState('primary')

  const saveOutput8 = (out) => {
    if (outputColor8=='warning'){
      setOutput(0)
      setColor8(outputColor8='primary')
    }
    else {
      setOutput(out)
      setColor1(outputColor1='primary')
      setColor2(outputColor2='primary')
      setColor3(outputColor2='primary')
      setColor4(outputColor2='primary')
      setColor5(outputColor2='primary')
      setColor6(outputColor2='primary')
      setColor7(outputColor2='primary')
      setColor8(outputColor2='warning')
      setColor9(outputColor2='primary')
      setColor10(outputColor2='primary')
      setColor11(outputColor2='primary')
      setColor12(outputColor2='primary')
    }
  }
//Salida 9
  var [outputColor9,setColor9] = useState('primary')

  const saveOutput9 = (out) => {
    if (outputColor9=='warning'){
      setOutput(0)
      setColor9(outputColor9='primary')
    }
    else {
      setOutput(out)
      setColor1(outputColor1='primary')
      setColor2(outputColor2='primary')
      setColor3(outputColor2='primary')
      setColor4(outputColor2='primary')
      setColor5(outputColor2='primary')
      setColor6(outputColor2='primary')
      setColor7(outputColor2='primary')
      setColor8(outputColor2='primary')
      setColor9(outputColor2='warning')
      setColor10(outputColor2='primary')
      setColor11(outputColor2='primary')
      setColor12(outputColor2='primary')
    }
  }

  //Salida 10 
  var [outputColor10,setColor10] = useState('primary')

  const saveOutput10 = (out) => {
    if (outputColor10=='warning'){
      setOutput(0)
      setColor10(outputColor10='primary')
    }
    else {
      setOutput(out)
      setColor1(outputColor1='primary')
      setColor2(outputColor2='primary')
      setColor3(outputColor2='primary')
      setColor4(outputColor2='primary')
      setColor5(outputColor2='primary')
      setColor6(outputColor2='primary')
      setColor7(outputColor2='primary')
      setColor8(outputColor2='primary')
      setColor9(outputColor2='primary')
      setColor10(outputColor2='warning')
      setColor11(outputColor2='primary')
      setColor12(outputColor2='primary')
    }
  }
//Salida 11
  var [outputColor11,setColor11] = useState('primary')

  const saveOutput11 = (out) => {
    if (outputColor11=='warning'){
      setOutput(0)
      setColor11(outputColor11='primary')
    }
    else {
      setOutput(out)
      setColor1(outputColor1='primary')
      setColor2(outputColor2='primary')
      setColor3(outputColor2='primary')
      setColor4(outputColor2='primary')
      setColor5(outputColor2='primary')
      setColor6(outputColor2='primary')
      setColor7(outputColor2='primary')
      setColor8(outputColor2='primary')
      setColor9(outputColor2='primary')
      setColor10(outputColor2='primary')
      setColor11(outputColor2='warning')
      setColor12(outputColor2='primary')
    }
  }

  //Salida 12
  var [outputColor12,setColor12] = useState('primary')

  const saveOutput12 = (out) => {
    if (outputColor12=='warning'){
      setOutput(0)
      setColor12(outputColor12='primary')
    }
    else {
      setOutput(out)
      setColor1(outputColor1='primary')
      setColor2(outputColor2='primary')
      setColor3(outputColor2='primary')
      setColor4(outputColor2='primary')
      setColor5(outputColor2='primary')
      setColor6(outputColor2='primary')
      setColor7(outputColor2='primary')
      setColor8(outputColor2='primary')
      setColor9(outputColor2='primary')
      setColor10(outputColor2='primary')
      setColor11(outputColor2='primary')
      setColor12(outputColor2='warning')
    }
  }

  //Entrada 1
  const [inputColor1,setInputColor1] = useState('primary')

  const saveInput1 = (Input) => {

    if (inputColor1=='warning'){
      setInput(0)
      setInputColor1('primary')
    }
    else {
      setInput(Input)
      setInputColor1('warning')
      setInputColor2('primary')
      setInputColor3('primary')
      setInputColor4('primary')
      setInputColor5('primary')
      setInputColor6('primary')
      setInputColor7('primary')
      setInputColor8('primary')
      setInputColor9('primary')
      setInputColor10('primary')
      setInputColor11('primary')
      setInputColor12('primary')

    }
  }
  //Entrada 2
    const [inputColor2,setInputColor2] = useState('primary')

    const saveInput2 = (Input) => {
  
      if (inputColor2=='warning'){
        setInput(0)
        setInputColor2('primary')
      }
      else {
        setInput(Input)
        setInputColor1('primary')
        setInputColor2('warning')
        setInputColor3('primary')
        setInputColor4('primary')
        setInputColor5('primary')
        setInputColor6('primary')
        setInputColor7('primary')
        setInputColor8('primary')
        setInputColor9('primary')
        setInputColor10('primary')
        setInputColor11('primary')
        setInputColor12('primary')
  
      }
    }
//Entrada 3
  const [inputColor3,setInputColor3] = useState('primary')

  const saveInput3 = (Input) => {

    if (inputColor3=='warning'){
      setInput(0)
      setInputColor3('primary')
    }
    else {
      setInput(Input)
      setInputColor1('primary')
      setInputColor2('primary')
      setInputColor3('warning')
      setInputColor4('primary')
      setInputColor5('primary')
      setInputColor6('primary')
      setInputColor7('primary')
      setInputColor8('primary')
      setInputColor9('primary')
      setInputColor10('primary')
      setInputColor11('primary')
      setInputColor12('primary')

    }
  }
//Entrada 4
    const [inputColor4,setInputColor4] = useState('primary')

    const saveInput4 = (Input) => {
  
      if (setInputColor4=='warning'){
        setInput(0)
        setInputColor4('primary')
      }
      else {
        setInput(Input)
        setInputColor1('primary')
        setInputColor2('primary')
        setInputColor3('primary')
        setInputColor4('warning')
        setInputColor5('primary')
        setInputColor6('primary')
        setInputColor7('primary')
        setInputColor8('primary')
        setInputColor9('primary')
        setInputColor10('primary')
        setInputColor11('primary')
        setInputColor12('primary')
  
      }
    }
//Entrada 5
  const [inputColor5,setInputColor5] = useState('primary')

  const saveInput5 = (Input) => {

    if (setInputColor5=='warning'){
      setInput(0)
      setInputColor5('primary')
    }
    else {
      setInput(Input)
      setInputColor1('primary')
      setInputColor2('primary')
      setInputColor3('primary')
      setInputColor4('primary')
      setInputColor5('warning')
      setInputColor6('primary')
      setInputColor7('primary')
      setInputColor8('primary')
      setInputColor9('primary')
      setInputColor10('primary')
      setInputColor11('primary')
      setInputColor12('primary')

    }
  }
//Entrada 6
    const [inputColor6,setInputColor6] = useState('primary')

    const saveInput6 = (Input) => {
  
      if (inputColor6=='warning'){
        setInput(0)
        setInputColor6('primary')
      }
      else {
        setInput(Input)
        setInputColor1('primary')
        setInputColor2('primary')
        setInputColor3('primary')
        setInputColor4('primary')
        setInputColor5('primary')
        setInputColor6('warning')
        setInputColor7('primary')
        setInputColor8('primary')
        setInputColor9('primary')
        setInputColor10('primary')
        setInputColor11('primary')
        setInputColor12('primary')
  
      }
    }
//Entrada 7
  const [inputColor7,setInputColor7] = useState('primary')

  const saveInput7 = (Input) => {

    if (inputColor7=='warning'){
      setInput(0)
      setInputColor7('primary')
    }
    else {
      setInput(Input)
      setInputColor1('primary')
      setInputColor2('primary')
      setInputColor3('primary')
      setInputColor4('primary')
      setInputColor5('primary')
      setInputColor6('primary')
      setInputColor7('warning')
      setInputColor8('primary')
      setInputColor9('primary')
      setInputColor10('primary')
      setInputColor11('primary')
      setInputColor12('primary')

    }
  }
//Entrada 8
    const [inputColor8,setInputColor8] = useState('primary')

    const saveInput8 = (Input) => {
  
      if (inputColor8=='warning'){
        setInput(0)
        setInputColor8('primary')
      }
      else {
        setInput(Input)
        setInputColor1('primary')
        setInputColor2('primary')
        setInputColor3('primary')
        setInputColor4('primary')
        setInputColor5('primary')
        setInputColor6('primary')
        setInputColor7('primary')
        setInputColor8('warning')
        setInputColor9('primary')
        setInputColor10('primary')
        setInputColor11('primary')
        setInputColor12('primary')
  
      }
    }
//Entrada 9
  const [inputColor9,setInputColor9] = useState('primary')

  const saveInput9 = (Input) => {

    if (inputColor9=='warning'){
      setInput(0)
      setInputColor9('primary')
    }
    else {
      setInput(Input)
      setInputColor1('primary')
      setInputColor2('primary')
      setInputColor3('primary')
      setInputColor4('primary')
      setInputColor5('primary')
      setInputColor6('primary')
      setInputColor7('primary')
      setInputColor8('primary')
      setInputColor9('warning')
      setInputColor10('primary')
      setInputColor11('primary')
      setInputColor12('primary')

    }
  }
    //Entrada 10
    const [inputColor10,setInputColor10] = useState('primary')

    const saveInput10 = (Input) => {
  
      if (inputColor10=='warning'){
        setInput(0)
        setInputColor10('primary')
      }
      else {
        setInput(Input)
        setInputColor1('primary')
        setInputColor2('primary')
        setInputColor3('primary')
        setInputColor4('primary')
        setInputColor5('primary')
        setInputColor6('primary')
        setInputColor7('primary')
        setInputColor8('primary')
        setInputColor9('primary')
        setInputColor10('warning')
        setInputColor11('primary')
        setInputColor12('primary')
  
      }
    }
      //Entrada 11
  const [inputColor11,setInputColor11] = useState('primary')

  const saveInput11 = (Input) => {

    if (inputColor11=='warning'){
      setInput(0)
      setInputColor11('primary')
    }
    else {
      setInput(Input)
      setInputColor1('primary')
      setInputColor2('primary')
      setInputColor3('primary')
      setInputColor4('primary')
      setInputColor5('primary')
      setInputColor6('primary')
      setInputColor7('primary')
      setInputColor8('primary')
      setInputColor9('primary')
      setInputColor10('primary')
      setInputColor11('warning')
      setInputColor12('primary')

    }
  }
    //Entrada 12
    const [inputColor12,setInputColor12] = useState('primary')

    const saveInput12 = (Input) => {
  
      if (inputColor12=='warning'){
        setInput(0)
        setInputColor12('primary')
      }
      else {
        setInput(Input)
        setInputColor1('primary')
        setInputColor2('primary')
        setInputColor3('primary')
        setInputColor4('primary')
        setInputColor5('primary')
        setInputColor6('primary')
        setInputColor7('primary')
        setInputColor8('primary')
        setInputColor9('primary')
        setInputColor10('primary')
        setInputColor11('primary')
        setInputColor12('warning')
  
      }
    }
    return (
    <div className="Buttons" >
        <Container className = 'Matrix'>
        <Row className = "row">
          <Col className="columns">
          <p className = "App-font">Salidas</p>
  
          <ButtonGroup className="Buttons1"  vertical >
            <ButtonGroup size="lg">
              <Button variant={outputColor1} onClick={() => saveOutput1(1)} ><p className = "App-font3">1</p></Button>
              <Button variant={outputColor2} onClick={() => saveOutput2(2)} ><p className = "App-font3">2</p></Button>
              <Button variant={outputColor3} onClick={() => saveOutput3(3)} ><p className = "App-font3">3</p></Button>
              <Button variant={outputColor4} onClick={() => saveOutput4(4)} ><p className = "App-font3">4</p></Button>
            </ButtonGroup>
            <ButtonGroup size="lg">
              <Button variant={outputColor5} onClick={() => saveOutput5(5)} ><p className = "App-font3">5</p></Button>
              <Button variant={outputColor6} onClick={() => saveOutput6(6)} ><p className = "App-font3">6</p></Button>
              <Button variant={outputColor7} onClick={() => saveOutput7(7)} ><p className = "App-font3">7</p></Button>
              <Button variant={outputColor8} onClick={() => saveOutput8(8)} ><p className = "App-font3">8</p></Button>
            </ButtonGroup>
            <ButtonGroup size="lg">
              <Button variant={outputColor9} onClick={() => saveOutput9(9)} ><p className = "App-font3">9</p></Button>
              <Button variant={outputColor10} onClick={() => saveOutput10(10)} ><p className = "App-font3">10</p></Button>
              <Button variant={outputColor11} onClick={() => saveOutput11(11)} ><p className = "App-font3">11</p></Button>
              <Button variant={outputColor12} onClick={() => saveOutput12(12)} ><p className = "App-font3">12</p></Button>
            </ButtonGroup>
  
          </ButtonGroup>
          </Col>
          <Col className="columns">
          <p className = "App-font">Entradas</p>
          <ButtonGroup className="Buttons1"  vertical >
            <ButtonGroup size="lg">
              <Button variant={inputColor1} onClick={() => saveInput1(1)} ><p className = "App-font3">1</p></Button>
              <Button variant={inputColor2} onClick={() => saveInput2(2)} ><p className = "App-font3">2</p></Button>
              <Button variant={inputColor3} onClick={() => saveInput3(3)} ><p className = "App-font3">3</p></Button>
              <Button variant={inputColor4} onClick={() => saveInput4(4)} ><p className = "App-font3">4</p></Button>
            </ButtonGroup>
            <ButtonGroup size="lg">
              <Button variant={inputColor5} onClick={() => saveInput5(5)} ><p className = "App-font3">5</p></Button>
              <Button variant={inputColor6} onClick={() => saveInput6(6)} ><p className = "App-font3">6</p></Button>
              <Button variant={inputColor7} onClick={() => saveInput7(7)} ><p className = "App-font3">7</p></Button>
              <Button variant={inputColor8} onClick={() => saveInput8(8)} ><p className = "App-font3">8</p></Button>
            </ButtonGroup>
            <ButtonGroup size="lg">
              <Button variant={inputColor9} onClick={() => saveInput9(9)} ><p className = "App-font3">9</p></Button>
              <Button variant={inputColor10} onClick={() => saveInput10(10)} ><p className = "App-font3">10</p></Button>
              <Button variant={inputColor11} onClick={() => saveInput11(11)} ><p className = "App-font3">11</p></Button>
              <Button variant={inputColor12} onClick={() => saveInput12(12)} ><p className = "App-font3">12</p></Button>
            </ButtonGroup>
          </ButtonGroup>
          </Col>
          </Row>
        </Container>
      <Button style={{ "margin-bottom":"20px"}} variant="primary" onClick={() =>sendRouting()} size="lg">
        <SendIcon /> Enviar</Button>

    </div>
    )
}
