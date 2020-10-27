import React from "react"
import '../App.css';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterIcon from '@material-ui/icons/Router';
import Matrix12x12 from '../components/Matrix12x12'

export default function MatrixButton(props){
  return (
    <div>
    <Button  
    onClick = {props.toggleMatrix}
    className='Button' 
    variant="primary">
      <RouterIcon style={{ fontSize: 65,color: "white" }} />
      <br></br>
      <p className="App-font">{props.name}</p>
      </Button>
    </div>
  )

}

