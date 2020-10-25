import React from "react"
import '../App.css';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import TvIcon from '@material-ui/icons/Tv';


export default function MonitorButton(props){
  const [open, toggleLight] = React.useState(false);

  const Lighttoggle = () => {
    toggleLight(!open)
  }

  return (
    
    <Button conClick = {Lighttoggle}className='Button' variant="danger">
        <TvIcon  style={{ fontSize: 65 ,color: "white"}}/>    
    <br></br>
    <p className="App-font">{props.name}</p>
    </Button>

  )

}