import React from "react"
import '../App.css';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';


export default function LightButton(props){
  const [open, toggleLight] = React.useState(false);

  const Lighttoggle = () => {
    toggleLight(!open)
  }

  return (
    
    <Button conClick = {Lighttoggle}className='Button' variant="success">
    <EmojiObjectsIcon style={{ fontSize: 65,color: "white" }} />
    <br></br>
    <p className="App-font">{props.name}</p>
    </Button>

  )

}