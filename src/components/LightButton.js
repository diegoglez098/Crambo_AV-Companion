import React from "react"
import '../App.css';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export default function LightButton(props){
  const [openToggle, toggleSwitch] = React.useState(false);

  const switchToggle = () => {
    toggleSwitch(!openToggle)

  }
  return (
    <div>
    <Button onClick = {switchToggle}className='Button' variant="success">
    <EmojiObjectsIcon style={{ fontSize: 65,color: "white" }} />
    <br></br>
    <p className="App-font">{props.name}</p>
    </Button>
    <Menu
  id="fade-menu"
  anchorEl={true}
  keepMounted
  open={openToggle}
  onClose={switchToggle}
  TransitionComponent={Fade}
>
  <MenuItem onClick={switchToggle}>Encender</MenuItem>
  <MenuItem onClick={switchToggle}>Apagar</MenuItem>
</Menu>
  </div>
  )

}