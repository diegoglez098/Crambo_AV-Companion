import React from "react"
import '../App.css';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterIcon from '@material-ui/icons/Router';


export default function MatrixButton(props){
  const [open, toggleMatrix] = React.useState(false);

  Matrixtoggle = () => {
    toggleMatrix(!open)
  }

  return (
    
    <Button conClick = {Matrixtoggle}className='Button' variant="primary">
    <RouterIcon style={{ fontSize: 65,color: "white" }} />
    <br></br>
    <p className="App-font">{props.name}</p>
    </Button>

  )

}

