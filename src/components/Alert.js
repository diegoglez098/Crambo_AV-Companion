import React, { useState } from "react"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Snackbar from '@material-ui/core/Snackbar';

export default function MatrixButton(props){
    var [color,setColor] = useState('success')
    var [open, setOpen] = useState(false)
    var [msg,setMsg] = useState('Error al conectar')

    const getColor = () =>{
        var http = new XMLHttpRequest();
        http.open("GET", 'http://192.168.0.16:5000/API/v1.0/blackmagic_connect', true);
        if (http.response == 1){
            setColor('success')
            setOpen(true)
            setMsg('Conectado correctamente')
        }
        else if (http.response == 0){
            setColor('warning')
            setOpen(true)
            setMsg('Error al conectar')
        }
    }

  return (
    <Snackbar
        open={open}
        onLoad={()=>getColor()}
        autoHideDuration={6000}
        anchorOrigin={{ vertical:'bottom', horizontal:'left', }}
        message={msg}>
    </Snackbar>

  )

}