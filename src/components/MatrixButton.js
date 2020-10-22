import React from "react"
import '../App.css';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class MatrixButton extends Component {

    constructor( props ) {
        super(props)
        this.state = {show : false};
    
        this.toggleMatrix = this.toggleMatrix.bind(this)
      }
      toggleMatrix = () => {
        const { show } = this.state;
        this.setState({ show: !show })
      }

render(){
    return (
    
    <Button conClick = { this.toggleMatrix }className='Button' variant="primary">
        <img 
        src={require('../images/servidor.png')} 
        alt="Matrix"
        width='70px'
        height='70px'
        />
    <br></br>
    <p className="App-font">BlackMagic</p>
    </Button>{' '}
    )
}
}
export default MatrixButton;
