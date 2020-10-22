import React from 'react';
import axios from 'axios';
import '../App.css';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            IP: null
        };
    }

    componentDidMount() {
        const headers = {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
        axios.get('http://192.168.0.16:5000/API/v1.0/getIP',{ headers })
            .then(response => this.setState({ IP: response.data }));
    }

    render() {
        const { IP } = this.state;
        return (
            <p className = 'App-font4'>IP de BlackMagic: {IP}</p>
        );
    }
}

export default GetRequest; 