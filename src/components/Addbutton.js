import React, { useState } from 'react';
import '../App.css';
import {FloatingMenu,MainButton,ChildButton,} from 'react-floating-button-menu';
import MdAdd from '@material-ui/icons/Add';
import MdClose from '@material-ui/icons/Close';
import TvIcon from '@material-ui/icons/Tv';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import RouterIcon from '@material-ui/icons/Router';
import Fab from '@material-ui/core/Fab';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import AddDevice from './AddDevice';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [modal,openModal] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(!open);
    };
  
    const Modal = () => {
        openModal(!modal);
    };

return (
<div className="AddButton">
    <FloatingMenu
      slideSpeed={350}
      direction="left"
      spacing={12}
      isOpen={open}
    >
        <MainButton
        iconResting={<MdAdd style={{ color:"white", fontSize: 40}} nativeColor="white" />}
        iconActive={<MdClose style={{ color:"white",fontSize: 40 }} nativeColor="white" />}
        onClick={handleClickOpen}
        background="#4287f5"
        size={80}
        />
        <ChildButton
        icon={<TvIcon  style={{ 
            fontSize: 40 ,
            color: "white"
        }}/>}
        color="white"
        size={80}
        opened={Modal}
        background="#4287f5"
        onClick={openModal}
        />
        <ChildButton
        icon={<EmojiObjectsIcon  style={{ fontSize: 40,color: "white" }} nativeColor="white" />}
        size={80}
        background="#4287f5"
        />
        <ChildButton
        icon={<RouterIcon  style={{ fontSize: 40,color: "white" }} nativeColor="white" />}
        background="#4287f5"
        size={80}
        />
    
  </FloatingMenu>
  <Dialog open={modal} onClose={Modal} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Añadir nuevo {props.device}</DialogTitle>
        <DialogContent>
          <TextField
            
            margin="dense"
            id="name"
            label="Nombre del equipo"
            type="text"
            fullWidth
          />
        <TextField
            
            margin="dense"
            id="ip"
            label="IP del equipo"
            type="numbers"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={Modal} color="primary">
            Cancelar
          </Button>
          <Button onClick={Modal} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
</div>

)
      
}
