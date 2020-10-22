import React from 'react';
import axios from 'axios';
import '../App.css';
import {Alert} from 'react-bootstrap'

class connectStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rs: null
        };
    }

    componentDidMount() {
        const headers = {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
        axios.get('http://192.168.0.16:5000/API/v1.0/routing',{ headers })
            .then(response => this.setState({ rs: response.data }));
    }

    componentDidUpdate(){
        setTimeout(() => this.setState({rs:''}), 3000);
      }

    render() {
        const { rs } = this.state;
        return (        
        <Alert variant="danger">
        <a className = 'App-font4'>{rs}</a>
        </Alert>
        );
    }
}

export default connectStatus; 